import { TextField, Typography, Stack } from "@mui/material";
import { useFormContext } from "react-hook-form";

import "./TravelDetails.css";

function TravelDetails() {
  const {register,formState: { errors }} = useFormContext();

  return (
    <div className="travel-details">

        <div className="travel-details-header">

        <Typography
            variant="h4"
            className="travel-details-title"
        >
            Travel Details
        </Typography>

        <Typography
            variant="body1"
            className="travel-details-subtitle"
        >
            Enter your travel preferences to continue with your booking.
        </Typography>

        </div>

      <Stack spacing={3} className="travel-details-form">
            <Typography
            variant="subtitle2"
            sx={{
              mb: 1,
              fontWeight: 600,
            }}
          >
            Travel Date
          </Typography>

          <TextField
            type="date"
            fullWidth
            {...register("travelDate")}
            error={!!errors.travelDate}
            helperText={errors.travelDate?.message}
          />



         <Typography
            variant="subtitle2"
            sx={{
              mb: 1,
              fontWeight: 600,
            }}
          >
            Number of Travellers
          </Typography>

          <TextField
            type="number"
            fullWidth
            inputProps={{
              min: 1,
            }}
            {...register("travellers", {
              valueAsNumber: true,
            })}
            error={!!errors.travellers}
            helperText={errors.travellers?.message}
          />
      </Stack>

    </div>
  );
}

export default TravelDetails;