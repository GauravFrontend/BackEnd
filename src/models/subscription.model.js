import mongoose, { model, Schema } from "mongoose";

const subscriptionSchema = new Schema(
  {
    subsriber: {
      type: Schema.Types.ObjectId, // one who is subsribing
      ref: "User"
    },
    channel: {
      type: Schema.Types.ObjectId, // one who is subsribed
      ref: "User"
    }
  },
  { timestamps: true }
);

export const Subscription = mongoose.model("Subsription", subscriptionSchema);
