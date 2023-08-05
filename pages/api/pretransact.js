const https = require("https");
const PaytmChecksum = require("paytmchecksum");
import connectDb from "@/middleware/mongoose";
import Order from "@/models/Order";
import Product from "@/models/Product";

const handler = async (req, res) => {
  if (req.method == "POST") {
    let product,
      subTotal = 0,
      cart = req.body.cart;
    for (let item in cart) {
      subTotal += cart[item].price * cart[item].qty;
      product = await Product.findOne({ slug: item });
      if (product.price != cart[item].price) {
        res.status(200).json({
          success: false,
          error: "The cart has been manipulated externally",
        });
        return;
      }
    }
    if (subTotal !== req.body.total) {
      res.status(200).json({
        success: false,
        error: "The cart has been manipulated externally",
      });
      return;
    }

    let order = new Order({
      email: req.body.email,
      orderId: req.body.oid,
      address: req.body.address,
      amount: req.body.total,
      products: req.body.cart,
    });
    await order.save();

    var paytmParams = {};

    paytmParams.body = {
      requestType: "Payment",
      mid: process.env.NEXT_PUBLIC_PAYTM_MID,
      websiteName: "Carterz",
      orderId: req.body.oid,
      callbackUrl: `${process.env.NEXT_PUBLIC_HOST}/api/posttransact`,
      txnAmount: {
        value: req.body.total,
        currency: "INR",
      },
      userInfo: {
        custId: req.body.email,
      },
    };

    const checksum = await PaytmChecksum.generateSignature(
      JSON.stringify(paytmParams.body),
      process.env.PAYTM_KEY
    );
    paytmParams.head = {
      signature: checksum,
    };

    var post_data = JSON.stringify(paytmParams);

    const requestAsync = () => {
      return new Promise((resolve, reject) => {
        var options = {
          hostname: "securegw.paytm.in",
          port: 443,
          path: `/theia/api/v1/initiateTransaction?mid=${process.env.NEXT_PUBLIC_PAYTM_MID}&orderId=${req.body.oid}`,
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Content-Length": post_data.length,
          },
        };

        var response = "";
        var post_req = https.request(options, function (post_res) {
          post_res.on("data", function (chunk) {
            response += chunk;
          });

          post_res.on("end", function () {
            let resp = JSON.parse(response).body;
            resp.success = true;
            resolve(resp);
          });
        });

        post_req.write(post_data);
        post_req.end();
      });
    };

    let myr = await requestAsync();
    res.status(200).json(myr);
  }
};
export default connectDb(handler);
