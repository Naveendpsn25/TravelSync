import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Typography,
  Stack,
} from "@mui/material";
import { updateBooking } from "../../../services/services/bookingService";
import { useState, useEffect } from "react";

function EditBookingDialog({
  open,
  booking,
  onClose,
  onUpdate,
}) {
  if (!booking) return null;

  const [formData, setFormData] = useState({
        travelDate: "",
        travellers: 1,
        fullName: "",
        email: "",
        phone: "",
        });

    useEffect(() => {
    if (booking) {
        setFormData({
        travelDate: booking.travelDate,
        travellers: booking.travellers,
        fullName: booking.fullName,
        email: booking.email,
        phone: booking.phone,
        });
    }
    }, [booking]);

    function handleChange(event) {
  const { name, value } = event.target;
  setFormData((previous) => ({
    ...previous,
    [name]: value,
  }));
}


    async function handleUpdateBooking() {
        try {
            const updatedBooking = {
            ...booking,

            travelDate: formData.travelDate,
            travellers: Number(formData.travellers),
            fullName: formData.fullName,
            email: formData.email,
            phone: formData.phone,
            };

            await updateBooking(
            booking.id,
            updatedBooking
            );

            onUpdate();

            onClose();

        } catch (error) {
            console.error(error);
        }
        }

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="sm"
    >
      <DialogTitle>
        Edit Booking
      </DialogTitle>

      <DialogContent>
        <Stack spacing={3} sx={{ mt: 1 }}>

  <TextField
    label="Package"
    value={booking.packageTitle}
    InputProps={{
      readOnly: true,
    }}
    fullWidth
  />

  <TextField
    label="Travel Date"
    type="date"
    name="travelDate"
    value={formData.travelDate}
    onChange={handleChange}
    InputLabelProps={{
      shrink: true,
    }}
    fullWidth
  />

  <TextField
    label="Travellers"
    type="number"
    name="travellers"
    value={formData.travellers}
    onChange={handleChange}
    fullWidth
  />

  <TextField
    label="Full Name"
    name="fullName"
    value={formData.fullName}
    onChange={handleChange}
    fullWidth
  />

  <TextField
    label="Email"
    name="email"
    value={formData.email}
    onChange={handleChange}
    fullWidth
  />

  <TextField
    label="Phone"
    name="phone"
    value={formData.phone}
    onChange={handleChange}
    fullWidth
  />

</Stack>
      </DialogContent>

      <DialogActions>
        <Button
          onClick={onClose}
        >
          Cancel
        </Button>

        <Button
        variant="contained"
        onClick={handleUpdateBooking}
        >
        Update Booking
        </Button>
      </DialogActions>

    </Dialog>
  );
}

export default EditBookingDialog;