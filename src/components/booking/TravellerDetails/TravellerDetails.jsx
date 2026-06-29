import {
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useFormContext } from "react-hook-form";

import "./TravellerDetails.css";

function TravellerDetails() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="traveller-details">
      <Typography
        variant="h4"
        className="traveller-details-title"
      >
        Traveller Details
      </Typography>

      <Typography
        variant="body1"
        className="traveller-details-subtitle"
      >
        Enter the primary traveller's information for the booking.
      </Typography>

      <Stack
        spacing={3}
        className="traveller-details-form"
      >
        <TextField
          label="Full Name"
          fullWidth
          {...register("fullName")}
          error={!!errors.fullName}
          helperText={errors.fullName?.message}
        />

        <TextField
          label="Email Address"
          type="email"
          fullWidth
          {...register("email")}
          error={!!errors.email}
          helperText={errors.email?.message}
        />

        <TextField
          label="Phone Number"
          fullWidth
          {...register("phone")}
          error={!!errors.phone}
          helperText={errors.phone?.message}
        />

        {/* <TextField
          label="Special Requests (Optional)"
          fullWidth
          multiline
          rows={4}
          placeholder="Example: Vegetarian meals, wheelchair assistance, honeymoon arrangements..."
          {...register("specialRequests")}
          error={!!errors.specialRequests}
          helperText={errors.specialRequests?.message}
        /> */}
      </Stack>
    </div>
  );
}

export default TravellerDetails;