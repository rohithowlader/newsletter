import mongoose from "mongoose";

const recipientSchema = mongoose.Schema(
  {
    uuid: {
      type: String,
      requied: true,
    },
    email: {
      type: String,
      requied: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);
const recipient = mongoose.model("Recipient", recipientSchema);
export default recipient;
