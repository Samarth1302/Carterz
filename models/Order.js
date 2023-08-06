const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    email: { type: String, required: true },
    orderId: { type: String, required: true },
    payInfo: { type: String, default: "" },
    products: { type: Object, required: true },
    address: { type: String, required: true },
    txnID: { type: String },
    amount: { type: Number, required: true },
    status: { type: String, default: "Initiated", required: true },
    deliverystatus: {
      type: String,
      default: "<u></u>nshipped",
      required: true,
    },
  },
  { timestamps: true }
);
mongoose.models = {};
export default mongoose.model("Order", OrderSchema);
