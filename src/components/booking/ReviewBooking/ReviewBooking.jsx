import {
  Box,
  Divider,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { useFormContext } from "react-hook-form";

import "./ReviewBooking.css";

function ReviewBooking({ travelPackage }) {
  const { watch } = useFormContext();

  const {
    travelDate,
    travellers,
    fullName,
    email,
    phone,
  } = watch();

  const totalAmount =
    (travelPackage?.price || 0) * (travellers || 0);

  return (
    <div className="review-booking">
      <Typography
        variant="h4"
        className="review-title"
      >
        Review & Confirm
      </Typography>

      <Typography
        variant="body1"
        className="review-subtitle"
      >
        Please review your booking details before confirming your reservation.
      </Typography>

      {/* Travel Information */}

      <Paper
        elevation={0}
        className="review-card"
      >
        <Typography
          variant="h6"
          className="review-section-title"
        >
          Travel Information
        </Typography>

        <Divider sx={{ mb: 2 }} />

        <Stack spacing={2}>
          <ReviewRow
            label="Travel Date"
            value={travelDate}
          />

          <ReviewRow
            label="Travellers"
            value={travellers}
          />
        </Stack>
      </Paper>

      {/* Traveller Information */}

      <Paper
        elevation={0}
        className="review-card"
      >
        <Typography
          variant="h6"
          className="review-section-title"
        >
          Traveller Information
        </Typography>

        <Divider sx={{ mb: 2 }} />

        <Stack spacing={2}>
          <ReviewRow
            label="Full Name"
            value={fullName}
          />

          <ReviewRow
            label="Email"
            value={email}
          />

          <ReviewRow
            label="Phone"
            value={phone}
          />
        </Stack>
      </Paper>

      {/* Package Information */}

      <Paper
        elevation={0}
        className="review-card"
      >
        <Typography
          variant="h6"
          className="review-section-title"
        >
          Package Information
        </Typography>

        <Divider sx={{ mb: 2 }} />

        <Stack spacing={2}>
          <ReviewRow
            label="Package"
            value={travelPackage.title}
          />

          <ReviewRow
            label="Destination"
            value={`${travelPackage.location}, ${travelPackage.country}`}
          />

          <ReviewRow
            label="Duration"
            value={`${travelPackage.duration} Days`}
          />

          <ReviewRow
            label="Price / Person"
            value={`₹${travelPackage.price.toLocaleString("en-IN")}`}
          />
        </Stack>
      </Paper>

      {/* Total */}

      <Paper
        elevation={0}
        className="review-total-card"
      >
        <Typography variant="h6">
          Total Amount
        </Typography>

        <Typography
          variant="h4"
          className="review-total-price"
        >
          ₹{totalAmount.toLocaleString("en-IN")}
        </Typography>
      </Paper>
    </div>
  );
}

function ReviewRow({ label, value }) {
  return (
    <Box className="review-row">
      <Typography className="review-label">
        {label}
      </Typography>

      <Typography className="review-value">
        {value}
      </Typography>
    </Box>
  );
}

export default ReviewBooking;