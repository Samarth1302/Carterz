import connectDb from "@/middleware/mongoose";
import Order from "@/models/Order";
import Product from "@/models/Product";
import PaytmChecksum from "paytmchecksum";

const handler = async (req, res) => {
  let order;
  var paytmChecksum = "";
  var paytmParams = {};

  const recvd_data = req.body;
  for (var key in recvd_data) {
    if (key == "CHECKSUMHASH") {
      paytmChecksum = recvd_data[key];
    } else {
      paytmParams[key] = recvd_data[key];
    }
  }

  var isValidChecksum = PaytmChecksum.verifySignature(
    paytmParams,
    process.env.PAYTM_KEY,
    paytmChecksum
  );
  if (!isValidChecksum) {
    res.status(500).send("PayTM Error");
    return;
  }

  if (req.body.STATUS == "TXN_SUCCESS") {
    order = await Order.findOneAndUpdate(
      { orderId: req.body.ORDERID },
      {
        status: "Paid",
        payInfo: JSON.stringify(req.body),
        txnID: req.body.TXNID,
      }
    );
    let products = order.products;
    for (let slug in products) {
      await Product.findOneAndUpdate(
        { slug: slug },
        { $inc: { availableQty: -products[slug].qty } }
      );
    }
  } else if (req.body.STATUS == "PENDING") {
    order = await Order.findOneAndUpdate(
      { orderId: req.body.ORDERID },
      {
        status: "Pending",
        payInfo: JSON.stringify(req.body),
        txnID: req.body.TXNID,
      }
    );
  }
  res.redirect("/order?clearCart=1&id=" + order._id, 200);
};
export default connectDb(handler);
