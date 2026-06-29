import { Box, Container, Grid, IconButton, Stack, Typography } from "@mui/material";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { NavLink } from "react-router-dom";
import "./Footer.css";

const quickLinks = [
  { label: "Home", path: "/" },
  { label: "Explore Packages", path: "/packages" },
  { label: "Wishlist", path: "/wishlist" },
];

const supportLinks = [
  { label: "Dashboard", path: "/dashboard" },
  { label: "Booking Help", path: "/packages" },
  { label: "Travel Guide", path: "/packages" },
  { label: "Contact Us", path: "/packages" },
];

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box component="footer" className="footer">
      <Container maxWidth="xl">
        <Grid container spacing={{ xs: 4, md: 5 }} className="footer-grid">
          <Grid size={{ xs: 12, md: 5 }}>
            <Stack spacing={2}>
              <NavLink to="/" className="footer-brand">
                <FlightTakeoffIcon className="footer-brand-icon" />
                <Typography component="span" className="footer-brand-text">
                  TravelSync
                </Typography>
              </NavLink>

              <Typography className="footer-description">
                Plan memorable journeys, save your favorite destinations, and
                manage every trip in one simple place.
              </Typography>

              <Stack direction="row" spacing={1}>
                <IconButton
                  aria-label="Visit TravelSync Facebook page"
                  className="footer-social-button"
                >
                  <FacebookIcon />
                </IconButton>

                <IconButton
                  aria-label="Visit TravelSync Instagram page"
                  className="footer-social-button"
                >
                  <InstagramIcon />
                </IconButton>

                <IconButton
                  aria-label="Visit TravelSync LinkedIn page"
                  className="footer-social-button"
                >
                  <LinkedInIcon />
                </IconButton>
              </Stack>
            </Stack>
          </Grid>

          <Grid size={{ xs: 6, sm: 4, md: 3 }}>
            <Typography className="footer-heading">Quick Links</Typography>

            <Stack spacing={1.2} className="footer-links">
              {quickLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className="footer-link"
                >
                  {link.label}
                </NavLink>
              ))}
            </Stack>
          </Grid>

          <Grid size={{ xs: 6, sm: 4, md: 2 }}>
            <Typography className="footer-heading">Support</Typography>

            <Stack spacing={1.2} className="footer-links">
              {supportLinks.map((link) => (
                <NavLink
                  key={link.label}
                  to={link.path}
                  className="footer-link"
                >
                  {link.label}
                </NavLink>
              ))}
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, sm: 4, md: 2 }}>
            <Typography className="footer-heading">Contact</Typography>

            <Stack spacing={1.2} className="footer-contact-list">
              <Typography className="footer-contact-text">
                Chennai, India
              </Typography>
              <Typography className="footer-contact-text">
                hello@travelsync.com
              </Typography>
              <Typography className="footer-contact-text">
                +91 98765 43210
              </Typography>
            </Stack>
          </Grid>
        </Grid>

        <Box className="footer-bottom">
          <Typography className="footer-copyright">
            © {currentYear} TravelSync. All rights reserved.
          </Typography>

          <Stack direction="row" spacing={2}>
            <Typography className="footer-policy">Privacy Policy</Typography>
            <Typography className="footer-policy">Terms of Service</Typography>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;