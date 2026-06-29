import {
  Card,
  CardContent,
  Typography,
  Stack,
  Chip,
  Button,
  Box,
} from "@mui/material";

import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import CurrencyRupeeRoundedIcon from "@mui/icons-material/CurrencyRupeeRounded";
import EventNoteRoundedIcon from "@mui/icons-material/EventNoteRounded";

import "./BookingCard.css";

function BookingCard({
  booking,
  onEdit,
  onDelete,
}) {
  return (
    <Card className="booking-card">

      <CardContent>

        <Typography
          variant="h6"
          className="booking-title"
        >
          {booking.packageTitle}
        </Typography>

        <Stack spacing={2} className="booking-details">

          <Box className="booking-row">
            <CalendarMonthRoundedIcon />
            <Typography>
              Travel Date : {booking.travelDate}
            </Typography>
          </Box>

          <Box className="booking-row">
            <GroupsRoundedIcon />
            <Typography>
              Travellers : {booking.travellers}
            </Typography>
          </Box>

          <Box className="booking-row">
            <CurrencyRupeeRoundedIcon />
            <Typography>
              ₹{booking.totalAmount.toLocaleString("en-IN")}
            </Typography>
          </Box>

          <Box className="booking-row">
            <EventNoteRoundedIcon />
            <Typography>
              {new Date(
                booking.bookingDate
              ).toLocaleDateString("en-IN")}
            </Typography>
          </Box>

        </Stack>

        <Chip
          label={booking.status}
          color="success"
          className="booking-status"
        />

        <Typography className="booking-reference-title">
          Booking Reference
        </Typography>

        <Typography className="booking-reference">
          {booking.bookingReference}
        </Typography>

        <Stack
          direction="row"
          spacing={2}
          className="booking-actions"
        >

          <Button
            variant="outlined"
            fullWidth
            onClick={() => onEdit(booking)}
          >
            Edit
          </Button>

          <Button
            variant="contained"
            color="error"
            fullWidth
            onClick={() => onDelete(booking.id)}
          >
            Delete
          </Button>

        </Stack>

      </CardContent>

    </Card>
  );
}

export default BookingCard;