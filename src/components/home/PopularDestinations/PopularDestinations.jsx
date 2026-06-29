import { useNavigate } from "react-router-dom";
import {
  Box,
  ButtonBase,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "./PopularDestinations.css";

const destinations = [
  {
    name: "Bali",
    country: "Indonesia",
    tagline: "Island temples, beaches, and sunsets",
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1000&q=85",
  },
  {
    name: "Dubai",
    country: "United Arab Emirates",
    tagline: "Luxury city escapes and desert adventures",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1000&q=85",
  },
  {
    name: "Paris",
    country: "France",
    tagline: "Culture, cafés, and timeless streets",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1000&q=85",
  },
  {
    name: "Goa",
    country: "India",
    tagline: "Relaxed beaches and coastal charm",
    image:
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1000&q=85",
  },
  {
    name: "Switzerland",
    country: "Europe",
    tagline: "Alpine views and peaceful mountain towns",
    image:
      "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=1000&q=85",
  },
  {
    name: "Maldives",
    country: "Indian Ocean",
    tagline: "Crystal water and private island stays",
    image:
      "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1000&q=85",
  },
];

function PopularDestinations() {
  const navigate = useNavigate();

  const handleDestinationClick = (destinationName) => {
    navigate(`/packages?search=${encodeURIComponent(destinationName)}`);
  };

  return (
    <Box component="section" className="popular-destinations">
      <Container maxWidth="xl">
        <Stack
          spacing={1.2}
          alignItems={{ xs: "flex-start", md: "center" }}
          textAlign={{ xs: "left", md: "center" }}
          className="popular-destinations-heading"
        >
          <Typography component="p" className="section-eyebrow">
            EXPLORE BY DESTINATION
          </Typography>

          <Typography component="h2" className="section-title">
            Popular Places to Start Your Journey
          </Typography>

          <Typography className="section-description">
            From calm beaches to exciting city escapes, discover destinations
            made for unforgettable memories.
          </Typography>
        </Stack>

        <Grid
          container
          spacing={{ xs: 2, sm: 2.5, md: 3 }}
          className="popular-destinations-grid"
        >
          {destinations.map((destination) => (
            <Grid key={destination.name} size={{ xs: 12, sm: 6, md: 4 }}>
              <ButtonBase
                className="destination-card"
                onClick={() => handleDestinationClick(destination.name)}
              >
                <Box
                  className="destination-card-image"
                  style={{
                    backgroundImage: `url(${destination.image})`,
                  }}
                />

                <Box className="destination-card-overlay" />

                <Stack className="destination-card-content" spacing={0.5}>
                  <Typography component="h3" className="destination-card-name">
                    {destination.name}
                  </Typography>

                  <Typography className="destination-card-country">
                    {destination.country}
                  </Typography>

                  <Typography className="destination-card-tagline">
                    {destination.tagline}
                  </Typography>

                  <Stack
                    direction="row"
                    spacing={0.7}
                    alignItems="center"
                    className="destination-card-action"
                  >
                    <Typography>Explore destination</Typography>
                    <ArrowForwardIcon />
                  </Stack>
                </Stack>
              </ButtonBase>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default PopularDestinations;