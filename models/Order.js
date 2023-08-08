const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    email: { type: String, required: true },
    orderId: { type: String, required: true },
    payInfo: { type: String, default: "" },
    products: { type: Object, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    pincode: { type: String, required: true },
    phone: { type: String, required: true },
    name: { type: String, required: true },
    txnID: { type: String, default: "" },
    amount: { type: Number, required: true },
    status: { type: String, default: "Initiated", required: true },
    deliverystatus: {
      type: String,
      default: "Unshipped",
      required: true,
    },
  },
  { timestamps: true }
);
mongoose.models = {};
export default mongoose.model("Order", OrderSchema);
