import {apiRequest} from "./api";

// Get all bookings
export function getBookings() {
  return apiRequest("/bookings");
}

// Get booking by ID
export function getBookingById(id) {
  return apiRequest(`/bookings/${id}`);
}

// Create booking
export function createBooking(bookingData) {
  return apiRequest("/bookings", {
    method: "POST",
    body: JSON.stringify(bookingData),
  });
}

// Update booking
export function updateBooking(id, bookingData) {
  return apiRequest(`/bookings/${id}`, {
    method: "PUT",
    body: JSON.stringify(bookingData),
  });
}

// Cancel booking
export function deleteBooking(id) {
  return apiRequest(`/bookings/${id}`, {
    method: "DELETE",
  });
}