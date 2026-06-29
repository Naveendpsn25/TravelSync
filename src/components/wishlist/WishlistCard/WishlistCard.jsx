import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Stack,
  Chip,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FavoriteIcon from "@mui/icons-material/Favorite";
import VisibilityIcon from "@mui/icons-material/Visibility";

import "./WishlistCard.css";

function WishlistCard({ travelPackage, onRemove }) {
// console.log(travelPackage);
    
  return (
    <Card className="wishlist-card">
      <CardMedia
        component="img"
        image={travelPackage.coverImage}
        alt={travelPackage.title}
        className="wishlist-card-image"
      />

      <CardContent className="wishlist-card-content">
        <Typography variant="h5" className="wishlist-card-title">
          {travelPackage.title}
        </Typography>

        <Stack
          direction="row"
          spacing={0.5}
          alignItems="center"
          className="wishlist-location"
        >
          <LocationOnIcon fontSize="small" />
          <Typography variant="body2">
            {travelPackage.location}, {travelPackage.country}
          </Typography>
        </Stack>

        <Stack
          direction="row"
          spacing={1}
          alignItems="center"
          className="wishlist-rating"
        >
          <StarIcon color="warning" fontSize="small" />

          <Typography variant="body2">
            {travelPackage.rating}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            ({travelPackage.reviewCount} Reviews)
          </Typography>
        </Stack>

        <Stack direction="row" spacing={1} mt={2}>
          <Chip
            label={travelPackage.category}
            color="primary"
            variant="outlined"
          />

          <Chip
            label={`${travelPackage.duration} Days`}
            color="success"
            variant="outlined"
          />
        </Stack>

        <Box className="wishlist-price-box">
          <Typography variant="h5" className="wishlist-price">
            ₹{travelPackage.price.toLocaleString("en-IN")}
          </Typography>
        </Box>

        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          mt={3}
          sx={{
            marginTop: "25px",
            }}
        >
          <Button
            component={Link}
            to={`/packages/${travelPackage.packageId}`}
            variant="outlined"
            startIcon={<VisibilityIcon />}
            fullWidth
          >
            View Details
          </Button>

          <Button
            variant="contained"
            color="error"
            startIcon={<FavoriteIcon />}
            fullWidth
            onClick={() => onRemove(travelPackage.id)}
          >
            Remove
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
}

export default WishlistCard;