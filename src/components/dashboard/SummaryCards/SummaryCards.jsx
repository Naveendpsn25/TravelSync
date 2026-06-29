import { Grid } from "@mui/material";
import LuggageRoundedIcon from "@mui/icons-material/LuggageRounded";
import FlightTakeoffRoundedIcon from "@mui/icons-material/FlightTakeoffRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import CurrencyRupeeRoundedIcon from "@mui/icons-material/CurrencyRupeeRounded";
import { useNavigate } from "react-router-dom";

import SummaryCard from "../SummaryCard/SummaryCard";

import { useEffect, useState } from "react";
import { getBookings } from "../../../services/services/bookingService";
import { getWishlist } from "../../../services/services/wishlistService";

import "./SummaryCards.css";

function SummaryCards() {
    const navigate = useNavigate();
    const [bookings, setBookings] = useState([]);
    const [wishlist, setWishlist] = useState([]);

    useEffect(() => {
    async function loadDashboardData() {
        try {
        const bookingsData = await getBookings();
        const wishlistData = await getWishlist();

        setBookings(bookingsData);

        setWishlist(wishlistData);
        } catch (error) {
        console.error(error);
        }
    }

    loadDashboardData();
    }, []);

    const totalBookings = bookings.length;

    const wishlistCount = wishlist.length;

    

    const totalAmountSpent = bookings.reduce(
    (total, booking) => total + booking.totalAmount,
    0
    );

  return (
    <Grid
      container
      spacing={3}
      className="summary-cards"
    >
      <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
        <SummaryCard
          icon={<LuggageRoundedIcon fontSize="large" />}
          title="Total Bookings"
          value={totalBookings}
          clickable
          onClick={() => navigate("/my-bookings")}
        />
      </Grid>

      <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
        <SummaryCard
          icon={<FlightTakeoffRoundedIcon fontSize="large" />}
          title="Upcoming Trips"
          value={4}
        />
      </Grid>

      <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
        <SummaryCard
          icon={<FavoriteRoundedIcon fontSize="large" />}
          title="Wishlist Packages"
          value={wishlistCount}
          clickable
          onClick={() => navigate("/wishlist")}
        />
      </Grid>

      <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
        <SummaryCard
          icon={<CurrencyRupeeRoundedIcon fontSize="large" />}
          title="Total Amount Spent"
          value={`₹${totalAmountSpent.toLocaleString("en-IN")}`}    
        />
      </Grid>
    </Grid>
  );
}

export default SummaryCards;