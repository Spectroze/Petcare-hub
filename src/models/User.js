import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  userType: {
    type: String,
    enum: [
      "pet-owner",
      "pet-grooming",
      "pet-training",
      "pet-boarding",
      "pet-admin",
    ],
    required: true,
  },
});

export default mongoose.models.User || mongoose.model("User", UserSchema);
