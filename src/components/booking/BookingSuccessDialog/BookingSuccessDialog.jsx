import {
  Dialog,
  DialogContent,
  Typography,
  Button,
  Stack,
  Box,
} from "@mui/material";

import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";

import "./BookingSuccessDialog.css";

import { useNavigate } from "react-router-dom";

function BookingSuccessDialog({
  open,
  bookingDetails,
  onClose,
}) 



{
  if (!bookingDetails) return null;
    const navigate = useNavigate();

    function handlepack(){
        navigate('/packages')
    }
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
    >
      <DialogContent className="booking-success-dialog">

        <CheckCircleRoundedIcon
          className="success-icon"
        />

        <Typography
          variant="h4"
          className="success-title"
        >
          Booking Confirmed!
        </Typography>

        <Typography
          className="success-subtitle"
        >
          Your booking has been successfully created.
        </Typography>

        <Box className="booking-details-box">

          <DetailRow
            label="Booking Reference"
            value={bookingDetails.bookingReference}
          />

          <DetailRow
            label="Package"
            value={bookingDetails.packageTitle}
          />

          <DetailRow
            label="Travel Date"
            value={bookingDetails.travelDate}
          />

          <DetailRow
            label="Travellers"
            value={bookingDetails.travellers}
          />

          <DetailRow
            label="Total Amount"
            value={`₹${bookingDetails.totalAmount.toLocaleString("en-IN")}`}
          />

        </Box>

        <Stack
          direction={{
            xs: "column",
            sm: "row",
          }}
          spacing={2}
          className="dialog-buttons"
        >

          <Button
            variant="outlined"
            fullWidth
            onClick={onClose}
          >
            Close
          </Button>

          <Button
            variant="contained"
            fullWidth
            onClick={handlepack}
          >
           Package Details
          </Button>

        </Stack>

      </DialogContent>
    </Dialog>
  );
}

function DetailRow({ label, value }) {
  return (
    <Box className="detail-row">
      <Typography className="detail-label">
        {label}
      </Typography>

      <Typography className="detail-value">
        {value}
      </Typography>
    </Box>
  );
}

export default BookingSuccessDialog;