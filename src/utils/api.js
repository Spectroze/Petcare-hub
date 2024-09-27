export const fetchUserAppointments = async () => {
  try {
    const response = await fetch("/api/appointment", {
      method: "GET", // Explicitly define the method as GET
      headers: {
        "Content-Type": "application/json", // Set the content type
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch appointments"); // Throw error if response is not OK
    }

    return await response.json(); // Parse and return the JSON response
  } catch (error) {
    console.error("Error fetching user appointments:", error); // Log the error for debugging
    throw error; // Re-throw the error to be handled by the caller
  }
};
