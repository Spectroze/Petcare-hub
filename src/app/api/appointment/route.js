import connect from "@/utils/db";
import Appointment from "@/models/appointment";

// Handle GET requests to fetch all appointments
export const GET = async (req) => {
  try {
    // Ensure MongoDB connection
    await connect();

    // Fetch all appointments
    const appointments = await Appointment.find({});

    return new Response(JSON.stringify(appointments), {
      status: 200,
    });
  } catch (error) {
    console.error("Error fetching appointments:", error);
    return new Response(
      JSON.stringify({
        message: "Error fetching appointments",
        error: error.message,
      }),
      { status: 500 }
    );
  }
};

// Handle POST requests to create a new appointment
export const POST = async (req) => {
  try {
    // Ensure MongoDB connection
    await connect();

    // Fetch appointment data from the request body
    const {
      firstName,
      lastName,
      email,
      phone,
      petName,
      breed,
      species,
      age,
      allergies,
      medicalHistory,
      emergencyName,
      emergencyContact,
      consentGiven,
      ownerPicture, // Base64 string
      petPicture, // Base64 string
    } = await req.json(); // Use req.json() to get data in Next.js API routes

    // Create a new appointment instance
    const appointment = new Appointment({
      owner: {
        firstName,
        lastName,
        email,
        phone,
        picture: ownerPicture, // Store or handle image
      },
      pet: {
        name: petName,
        breed,
        species,
        age: Number(age), // Ensure age is a number
        allergies,
        medicalHistory,
        picture: petPicture, // Store or handle image
      },
      emergencyContact: {
        name: emergencyName,
        phone: emergencyContact,
      },
      consentGiven,
    });

    // Save the appointment to the database
    await appointment.save();

    return new Response(
      JSON.stringify({ message: "Appointment created", appointment }),
      {
        status: 201,
      }
    );
  } catch (error) {
    console.error("Error creating appointment:", error);
    return new Response(
      JSON.stringify({
        message: "Error creating appointment",
        error: error.message,
      }),
      { status: 500 }
    );
  }
};

// Handle DELETE requests to delete an appointment by ID
export const DELETE = async (req) => {
  try {
    await connect(); // Ensure MongoDB connection

    // Extract the ID from the request URL
    const { searchParams } = new URL(req.url); // Use URL constructor to parse the request URL
    const id = searchParams.get("id"); // Get the ID parameter from the query string

    // Ensure an ID is provided
    if (!id) {
      return new Response(
        JSON.stringify({ message: "Appointment ID is required" }),
        { status: 400 }
      );
    }

    // Attempt to delete the appointment
    const deletedAppointment = await Appointment.findByIdAndDelete(id);
    if (!deletedAppointment) {
      return new Response(
        JSON.stringify({ message: "Appointment not found" }),
        { status: 404 }
      );
    }

    return new Response(null, { status: 204 }); // No Content
  } catch (error) {
    console.error("Error deleting appointment:", error);
    return new Response(
      JSON.stringify({
        message: "Failed to delete appointment",
        error: error.message,
      }),
      { status: 500 }
    );
  }
};
