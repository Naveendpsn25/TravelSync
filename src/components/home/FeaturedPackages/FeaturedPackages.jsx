import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "./FeaturedPackages.css";

const featuredPackages = [
  {
    id: "bali-paradise",
    title: "Explore Bali Paradise",
    location: "Bali, Indonesia",
    category: "Beach Escape",
    duration: "6 Days / 5 Nights",
    rating: "4.8",
    reviews: "240 reviews",
    price: "45,999",
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: "dubai-discovery",
    title: "Dubai City Discovery",
    location: "Dubai, UAE",
    category: "City Break",
    duration: "5 Days / 4 Nights",
    rating: "4.7",
    reviews: "186 reviews",
    price: "52,499",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: "switzerland-escape",
    title: "Swiss Alpine Escape",
    location: "Switzerland",
    category: "Mountain Retreat",
    duration: "7 Days / 6 Nights",
    rating: "4.9",
    reviews: "312 reviews",
    price: "78,999",
    image:
      "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=1000&q=85",
  },
];

function FeaturedPackages() {
  const navigate = useNavigate();

  return (
    <Box component="section" className="featured-packages">
      <Container maxWidth="xl">
        <Stack
          spacing={1.2}
          alignItems={{ xs: "flex-start", md: "center" }}
          textAlign={{ xs: "left", md: "center" }}
          className="featured-packages-heading"
        >
          <Typography component="p" className="section-eyebrow">
            HANDPICKED FOR YOU
          </Typography>

          <Typography component="h2" className="section-title">
            Trips Worth Packing For
          </Typography>

          <Typography className="section-description">
            Discover thoughtfully planned travel experiences designed to make
            every moment of your journey feel special.
          </Typography>
        </Stack>

        <Grid container spacing={{ xs: 2, sm: 2.5, md: 3 }}>
          {featuredPackages.map((travelPackage) => (
            <Grid key={travelPackage.id} size={{ xs: 12, sm: 6, lg: 4 }}>
              <Card className="featured-package-card">
                <Box className="featured-package-image-wrapper">
                  <CardMedia
                    component="img"
                    height="230"
                    image={travelPackage.image}
                    alt={travelPackage.title}
                    className="featured-package-image"
                  />

                  <Chip
                    label={travelPackage.category}
                    size="small"
                    className="featured-package-category"
                  />
                </Box>

                <CardContent className="featured-package-content">
                  <Stack spacing={1.4}>
                    <Stack
                      direction="row"
                      spacing={0.6}
                      alignItems="center"
                      className="featured-package-location"
                    >
                      <LocationOnOutlinedIcon />
                      <Typography>{travelPackage.location}</Typography>
                    </Stack>

                    <Typography component="h3" className="featured-package-title">
                      {travelPackage.title}
                    </Typography>

                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center"
                      className="featured-package-meta"
                    >
                      <Stack direction="row" spacing={0.5} alignItems="center">
                        <StarRoundedIcon className="featured-package-star" />
                        <Typography>{travelPackage.rating}</Typography>
                        <Typography className="featured-package-reviews">
                          ({travelPackage.reviews})
                        </Typography>
                      </Stack>

                      <Stack direction="row" spacing={0.5} alignItems="center">
                        <AccessTimeOutlinedIcon />
                        <Typography>{travelPackage.duration}</Typography>
                      </Stack>
                    </Stack>

                    <Box className="featured-package-divider" />

                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                        className="featured-package-bottom"
                        >
                        <Box>
                            <Typography className="featured-package-price-label">
                            Starting from
                            </Typography>

                            <Typography className="featured-package-price">
                            ₹{travelPackage.price}
                            </Typography>
                        </Box>

                        <Button
                            variant="contained"
                            endIcon={<ArrowForwardIcon />}
                            className="featured-package-button"
                            onClick={() => navigate("/packages")}
                        >
                            View Trip
                        </Button>
                        </Stack>
                    </Stack>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box className="featured-packages-action">
          <Button
            variant="outlined"
            size="large"
            endIcon={<ArrowForwardIcon />}
            className="featured-packages-view-all"
            onClick={() => navigate("/packages")}
          >
            View All Packages
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default FeaturedPackages;