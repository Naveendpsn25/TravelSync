import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Container,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ExploreIcon from "@mui/icons-material/Explore";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import "./HeroSection.css";

function HeroSection() {
  const navigate = useNavigate();

  const [searchData, setSearchData] = useState({
    destination: "",
    month: "",
    travellers: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setSearchData((previousData) => ({
      ...previousData,
      [name]: value, //for update any one field 
    }));
  };

  const handleSearch = (event) => {
    event.preventDefault();

    const searchParams = new URLSearchParams();

    if (searchData.destination.trim()) {
      searchParams.set("search", searchData.destination.trim());
    }

    if (searchData.month) {
      searchParams.set("month", searchData.month);
    }

    if (searchData.travellers) {
      searchParams.set("travellers", searchData.travellers);
    }

    const queryString = searchParams.toString();

    navigate(queryString ? `/packages?${queryString}` : "/packages");
  };

  return (
    <Box component="section" className="hero-section">
      <Box className="hero-overlay" />

      <Container maxWidth="xl" className="hero-container">
        <Stack className="hero-content" spacing={{ xs: 2.5, md: 3 }}>
          <Typography className="hero-eyebrow">
            PLAN. EXPLORE. REMEMBER.
          </Typography>

          <Typography component="h1" className="hero-title">
            Your Next Great Journey Starts Here
          </Typography>

          <Typography className="hero-description">
            Discover handpicked destinations, build your perfect itinerary, and
            book memorable travel experiences with ease.
          </Typography>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={1.5}
            className="hero-action-buttons"
          >
            <Button
              variant="contained"
              size="large"
              className="hero-primary-button"
              onClick={() => navigate("/packages")}
            >
              Explore Packages
            </Button>

            <Button
              variant="outlined"
              size="large"
              className="hero-secondary-button"
              onClick={() => navigate("/packages")}
            >
              Plan My Trip
            </Button>
          </Stack>

          <Box component="form" className="hero-search-form" onSubmit={handleSearch}>
            <Stack
              direction={{ xs: "column", md: "row" }}
              spacing={{ xs: 1.5, md: 1 }}
            >
              <TextField
                fullWidth
                name="destination"
                label="Where do you want to go?"
                placeholder="Bali, Goa, Dubai..."
                value={searchData.destination}
                onChange={handleChange}
                className="hero-search-field"
              />

              <TextField
                select
                fullWidth
                name="month"
                label="Travel month"
                value={searchData.month}
                onChange={handleChange}
                className="hero-search-field"
              >
                <MenuItem value="">Any month</MenuItem>
                <MenuItem value="July">July</MenuItem>
                <MenuItem value="August">August</MenuItem>
                <MenuItem value="September">September</MenuItem>
                <MenuItem value="October">October</MenuItem>
                <MenuItem value="November">November</MenuItem>
                <MenuItem value="December">December</MenuItem>
              </TextField>

              <TextField
                select
                fullWidth
                name="travellers"
                label="Travellers"
                value={searchData.travellers}
                onChange={handleChange}
                className="hero-search-field"
              >
                <MenuItem value="">Any group size</MenuItem>
                <MenuItem value="1">1 Traveller</MenuItem>
                <MenuItem value="2">2 Travellers</MenuItem>
                <MenuItem value="3-4">3–4 Travellers</MenuItem>
                <MenuItem value="5+">5+ Travellers</MenuItem>
              </TextField>

              <Button
                type="submit"
                variant="contained"
                className="hero-search-button"
                startIcon={<SearchIcon />}
              >
                Search
              </Button>
            </Stack>
          </Box>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 1.2, sm: 3 }}
            className="hero-trust-points"
          >
            <Stack direction="row" spacing={1} alignItems="center">
              <ExploreIcon />
              <Typography>Curated packages</Typography>
            </Stack>

            <Stack direction="row" spacing={1} alignItems="center">
              <CalendarMonthIcon />
              <Typography>Flexible planning</Typography>
            </Stack>

            <Stack direction="row" spacing={1} alignItems="center">
              <VerifiedUserOutlinedIcon />
              <Typography>Secure booking flow</Typography>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

export default HeroSection;