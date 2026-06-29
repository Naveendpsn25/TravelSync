import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Rating,
  Stack,
  Typography,
  Box
} from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import "./PackageCard.css";
import { Link } from "react-router-dom";

function PackageCard({ travelPackage }) {
  return (
    <Card className="package-card">
      <CardMedia
        component="img"
        height="220"
        image={travelPackage.coverImage}
        alt={travelPackage.title}
      />

      <CardContent className="package-card-content">
        <Chip
          label={travelPackage.category}
          size="small"
          className="package-category-chip"
        />

        <Typography variant="h6" className="package-title">
          {travelPackage.title}
        </Typography>

        <Stack
          direction="row"
          spacing={0.5}
          alignItems="center"
          className="package-location"
        >
          <LocationOnOutlinedIcon fontSize="small" />
          <Typography>{travelPackage.location}</Typography>
        </Stack>

        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          className="package-rating-row"
        >
          <Stack direction="row" spacing={1} alignItems="center">
            {/* <Rating
              value={travelPackage.rating}    
              precision={0.1}
              readOnly
              size="small"
            /> */}

            {/* <Typography className="package-review">
              ({travelPackage.reviewCount})
            </Typography> */}
          </Stack>

          <Stack direction="row" spacing={0.5} alignItems="center">
            <AccessTimeIcon fontSize="small" />
            <Typography>{travelPackage.duration} Days Plan</Typography>
          </Stack>
        </Stack>

        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          className="package-bottom"
        >
          <Box
            display="flex"
            className="package-bottom"
            justifyContent="space-between"
            alignItems="flex-end"
          >
            <Box>
              <Typography className="package-price-label">
                Starting From
              </Typography>

              <Typography className="package-price">
                ₹{travelPackage.price.toLocaleString("en-IN")}
              </Typography>
            </Box>

            <Button
              component={Link}
              to={`/packages/${travelPackage.id}`}
              variant="contained"
            >
              View Details
            </Button>
      </Box>
        </Stack>
      </CardContent>
    </Card>
  );
}

export default PackageCard;