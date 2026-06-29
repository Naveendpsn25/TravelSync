import {
  Typography,
  Grid,
  Card,
  CardContent,
  Chip,
  Button,
  Stack,
} from "@mui/material";
import { useEffect, useState } from "react";
import { getBookings } from "../../../services/services/bookingService";

import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";


function RecentBookings() {

    const [recentBookings, setRecentBookings] = useState([]);

    useEffect(() => {
        fetchRecentBookings();
    }, []);

    async function fetchRecentBookings() {
        try {

            const data = await getBookings();

            const latestBookings = [...data]
                .sort(
                    (a, b) =>
                        new Date(b.bookingDate) -
                        new Date(a.bookingDate)
                )
                .slice(0, 4);

            setRecentBookings(latestBookings);

        } catch (error) {
            console.error(error);
        }
    }

    // console.log("is",recentBookings);

    return (
  <>
    <Typography
      variant="h5"
      className="recent-bookings-title"
    >
      Recent Bookings
    </Typography>

    <Grid container spacing={3} sx={{ mt: 1 }}>
      {recentBookings.map((booking) => (
        <Grid
          key={booking.id}
          size={{
            xs: 12,
            md: 6,
          }}
        >
          <Card className="recent-booking-card">

           <CardContent>

  <Stack
    direction="row"
    justifyContent="space-between"
    alignItems="flex-start"
  >

    <Typography
      variant="h6"
      className="recent-package-title"
    >
      {booking.packageTitle}
    </Typography>
{/* 
    <Chip
      label={booking.status}
      color="success"
      size="small"
    /> */}

  </Stack>

  <Stack spacing={2} sx={{ mt: 3 }}>

    <Stack direction="row" spacing={1} alignItems="center">
      <CalendarMonthIcon fontSize="small" color="primary" />

      <Typography>
        {booking.travelDate}
      </Typography>
    </Stack>

    <Stack direction="row" spacing={1} alignItems="center">
      <CurrencyRupeeIcon fontSize="small" color="success" />

      <Typography>
        {booking.totalAmount.toLocaleString("en-IN")}
      </Typography>
    </Stack>

    {/* <Stack direction="row" spacing={1} alignItems="center">
      <ConfirmationNumberIcon
        fontSize="small"
        color="action"
      />

      <Typography>
        {booking.bookingReference}
      </Typography>
    </Stack> */}

  </Stack>

</CardContent>

          </Card>
        </Grid>
      ))}
    </Grid>

  </>
);
}

export default RecentBookings;