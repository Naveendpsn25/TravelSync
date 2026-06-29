import { Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { getBookings,deleteBooking } from "../../services/services/bookingService";
import BookingCard from "../../components/dashboard/BookingCard/BookingCard";
import EditBookingDialog from "../../components/booking/EditBookingDialog/EditBookingDialog";
import "./MyBookingsPage.css";

import {
  Grid,
  Paper,
  Box,
} from "@mui/material";


function MyBookingsPage() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  const [selectedBooking, setSelectedBooking] = useState(null);
  const [editDialogOpen, setEditDialogOpen] = useState(false);

  async function fetchBookings() {
  try {
    const data = await getBookings();
    setBookings(data);
  } catch (error) {
    console.error(error);
  } finally {
    setLoading(false);
  }
}

useEffect(() => {
  fetchBookings();
}, []);

  function handleEdit(booking) {
  setSelectedBooking(booking);
  setEditDialogOpen(true);
}

  async function handleDelete(id) {
  try {
    await deleteBooking(id);

    fetchBookings();
  } catch (error) {
    console.error(error);
  }
}

  function handleCloseDialog() {
    setEditDialogOpen(false);
    setSelectedBooking(null);
  }

  if (loading) {
    return (
      <Container maxWidth="xl">
        <Typography>Loading bookings...</Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="xl" className="my-bookings-page">

      <Typography
        variant="h4"
        className="my-bookings-title"
      >
        My Bookings
      </Typography>

      <Typography className="my-bookings-subtitle">
        Manage all your travel bookings in one place.
      </Typography>

      <Grid container spacing={3}>
        {bookings.map((booking) => (
          <Grid
            key={booking.id}
            size={{
              xs: 12,
              sm: 6,
              lg: 4,
            }}
          >
            <BookingCard
                booking={booking}
                onEdit={handleEdit}
                onDelete={handleDelete}

              />
          </Grid>
        ))}
      </Grid>

      <EditBookingDialog
        open={editDialogOpen}
        booking={selectedBooking}
        onClose={handleCloseDialog}
        onUpdate={fetchBookings}
      />

    </Container>
  );
}

export default MyBookingsPage;