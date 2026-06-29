import {
  Box,
  Chip,
  Container,
  Grid,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import "./HeroSection.css";

function HeroSection({ travelPackage }) {
    async function handleAddToWishlist() {
  try {
    await addToWishlist(travelPackage);

    alert("Package added to wishlist.");
  } catch (error) {
    console.error(error);
  }
}
  return (
    <Box className="package-hero">
      <Container maxWidth="lg">
        <Grid container spacing={5} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }}>
            <img
              src={travelPackage.coverImage}
              alt={travelPackage.title}
              className="package-hero-image"
            />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Chip
              label={travelPackage.category}
              className="package-category-chip"
            />

            <Typography
              variant="h3"
              className="package-title"
            >
              {travelPackage.title}
            </Typography>

            <Stack
              direction="row"
              spacing={1}
              alignItems="center"
              className="package-location"
            >
              <LocationOnOutlinedIcon />
              <Typography>
                {travelPackage.location}, {travelPackage.country}
              </Typography>
            </Stack>

            <Stack
              direction="row"
              spacing={3}
              alignItems="center"
              className="package-meta"
            >
              <Stack
                direction="row"
                spacing={1}
                alignItems="center"
              >
                <Rating
                  value={travelPackage.rating}
                  precision={0.1}
                  readOnly
                />

                <Typography>
                  ({travelPackage.reviewCount} Reviews)
                </Typography>
              </Stack>

              <Stack
                direction="row"
                spacing={1}
                alignItems="center"
              >
                <AccessTimeIcon />

                <Typography>
                  {travelPackage.duration} Days
                </Typography>
              </Stack>
            </Stack>

            <Typography className="package-price-label">
              Starting From
            </Typography>

            <Typography
              variant="h3"
              className="package-price"
            >
              ₹{travelPackage.price.toLocaleString("en-IN")}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default HeroSection;