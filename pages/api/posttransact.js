import connectDb from "@/middleware/mongoose";
import Order from "@/models/Order";

const handler = async (req, res) => {
  if (req.body.STATUS == "TXN_SUCCESS") {
    await Order.findOneAndUpdate(
      { orderId: req.body.ORDERID },
      { status: "Paid", payInfo: JSON.stringify(req.body) }
    );
  } else if (req.body.STATUS == "PENDING") {
    await Order.findOneAndUpdate(
      { orderId: req.body.ORDERID },
      { status: "Pending", payInfo: JSON.stringify(req.body) }
    );
  }
  res.redirect("/order", 200);
};
export default connectDb(handler);
