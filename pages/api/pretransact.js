const https = require("https");
const PaytmChecksum = require("paytmchecksum");
import connectDb from "@/middleware/mongoose";
import Order from "@/models/Order";
import Product from "@/models/Product";
import pincodes from "../../pincode.json";

const handler = async (req, res) => {
  if (req.method == "POST") {
    if (!Object.keys(pincodes).includes(req.body.pincode)) {
      res.status(200).json({
        success: false,
        error: "This pincode is not serviceable",
        cartClear: false,
      });
    }

    let product,
      subTotal = 0,
      cart = req.body.cart;

    if (req.body.total <= 0) {
      res.status(200).json({
        success: false,
        error: "Cart is empty!!",
        cartClear: false,
      });
      return;
    }
    for (let item in cart) {
      subTotal += cart[item].price * cart[item].qty;
      product = await Product.findOne({ slug: item });
      if (product.availableQty < cart[item].qty) {
        res.status(200).json({
          success: false,
          error: "Some cart items are not available",
        });
      }
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

    if (
      req.body.phone.length !== 10 ||
      !Number.isInteger(Number(req.body.phone))
    ) {
      res.status(200).json({
        success: false,
        error: "Phone number should be 10 digit long",
        cartClear: false,
      });
      return;
    }
    if (
      req.body.pincode.length !== 6 ||
      !Number.isInteger(Number(req.body.pincode))
    ) {
      res.status(200).json({
        success: false,
        error: "Pincode should be 6 digit long integer",
        cartClear: false,
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
            resp.cartClear = false;
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
