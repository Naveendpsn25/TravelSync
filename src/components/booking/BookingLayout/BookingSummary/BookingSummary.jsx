import {
  Card,
  CardContent,
  CardMedia,
  Divider,
  Stack,
  Typography,
} from "@mui/material";

import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

import "./BookingSummary.css";

function BookingSummary({ travelPackage }) {
  return (
    <Card className="booking-summary-card">

      <CardMedia
        component="img"
        height="220"
        image={travelPackage.coverImage}
        alt={travelPackage.title}
      />

      <CardContent>

        <Typography
          variant="h6"
          className="booking-summary-title"
        >
          {travelPackage.title}
        </Typography>

        <Stack
          direction="row"
          spacing={1}
          alignItems="center"
          className="booking-summary-location"
        >
          <LocationOnOutlinedIcon fontSize="small" />

          <Typography>
            {travelPackage.location}, {travelPackage.country}
          </Typography>

        </Stack>

        <Divider className="booking-summary-divider" />

        <Stack
          direction="row"
          justifyContent="space-between"
          className="booking-summary-row"
        >
          <Typography>Duration :</Typography>

          <Stack
            direction="row"
            spacing={0.5}
            alignItems="center"
          >
            <AccessTimeIcon fontSize="small" />

            <Typography>
              {travelPackage.duration} Days
            </Typography>
          </Stack>
        </Stack>

        <Stack
          direction="row"
          justifyContent="space-between"
          className="booking-summary-row"
        >
          <Typography>Package Price : </Typography>

          <Typography className="booking-summary-price">
            ₹{travelPackage.price.toLocaleString("en-IN")}
          </Typography>
        </Stack>

      </CardContent>

    </Card>
  );
}

export default BookingSummary;