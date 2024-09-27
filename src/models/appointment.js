import mongoose from "mongoose";

const AppointmentSchema = new mongoose.Schema({
  owner: {
    firstName: String,
    lastName: String,
    email: String,
    phone: String,
    picture: String,
  },
  pet: {
    name: String,
    breed: String,
    species: String,
    age: Number,
    allergies: String,
    medicalHistory: String,
    picture: String, // Base64 string for the pet picture
  },
  emergencyContact: {
    name: String,
    phone: String,
  },
  consentGiven: Boolean,
});

// Check if model exists before creating it
const Appointment =
  mongoose.models.Appointment ||
  mongoose.model("Appointment", AppointmentSchema);

export default Appointment;
