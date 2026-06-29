import { Button, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import "./PackageNotFound.css";

function PackageNotFound() {
  return (
    <Container maxWidth="md" className="package-not-found">

      <Typography
        variant="h2"
        className="package-not-found-title"
      >
        Package Not Found
      </Typography>

      <Typography className="package-not-found-description">
        Sorry, the package you're looking for doesn't exist or may have been removed.
      </Typography>

      <Button
        component={Link}
        to="/packages"
        variant="contained"
      >
        Browse All Packages
      </Button>

    </Container>
  );
}

export default PackageNotFound;