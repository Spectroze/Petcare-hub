import nextConnect from "next-connect";
import multer from "multer";
import { MongoClient, Binary } from "mongodb";
import { db } from "@/lib/db";

// Set up Multer for memory storage to handle file uploads
const upload = multer({ storage: multer.memoryStorage() });

// MongoDB connection URL from environment variables
const url = process.env.MONGO_URL;
let client;
let clientPromise;

if (!client) {
  client = new MongoClient(url);
  clientPromise = client.connect();
}

async function connectToDatabase() {
  // Reuse the existing MongoDB connection
  const connection = await clientPromise;
  return connection.db("petcare-app"); // Use your database name here
}

const handler = nextConnect();

// Middleware to handle multipart form data (text fields + file uploads)
handler.use(upload.fields([{ name: "ownerPicture" }, { name: "petPicture" }]));

handler.post(async (req, res) => {
  try {
    const db = await connectToDatabase();
    const collection = db.collection("appointments");

    // Prepare the data from req.body and req.files
    const appointmentData = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      phone: req.body.phone,
      petName: req.body.petName,
      breed: req.body.breed,
      species: req.body.species,
      age: req.body.age,
      allergies: req.body.allergies,
      medicalHistory: req.body.medicalHistory,
      emergencyName: req.body.emergencyName,
      emergencyContact: req.body.emergencyContact,
      consentGiven: req.body.consentGiven === "true", // Parse boolean value
      ownerPicture: req.files.ownerPicture
        ? new Binary(req.files.ownerPicture[0].buffer) // Convert buffer to MongoDB Binary format
        : null,
      petPicture: req.files.petPicture
        ? new Binary(req.files.petPicture[0].buffer) // Convert buffer to MongoDB Binary format
        : null,
    };

    // Insert the document into MongoDB
    await collection.insertOne(appointmentData);

    // Send a success response
    res.status(200).json({ message: "Appointment submitted successfully!" });
  } catch (error) {
    console.error("Error submitting appointment:", error); // Log full error details
    res.status(500).json({ error: "Failed to submit appointment" });
  }
});

export const config = {
  api: {
    bodyParser: false, // Disable body parsing since multer is handling the files
  },
};

export default handler;
