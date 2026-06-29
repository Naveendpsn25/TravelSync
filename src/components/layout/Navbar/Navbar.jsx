import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import "./Navbar.css";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Explore Packages", path: "/packages" },
  { label: "Wishlist", path: "/wishlist" },
  { label: "Dashboard", path: "/dashboard" },
];

function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setIsDrawerOpen((previousState) => !previousState);
  };

  const handlePlanTrip = () => {
    setIsDrawerOpen(false);
    navigate("/packages");
  };

  return (
    <>
      <AppBar position="sticky" elevation={0} className="navbar">
        <Container maxWidth="xl">
          <Toolbar disableGutters className="navbar-toolbar">
            <NavLink to="/" className="navbar-brand">
              <FlightTakeoffIcon className="navbar-brand-icon" />
              <Typography component="span" className="navbar-brand-text">
                TravelSync
              </Typography>
            </NavLink>

            <Box className="navbar-desktop-links">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === "/"}
                  className={({ isActive }) =>
                    `navbar-link ${isActive ? "navbar-link--active" : ""}`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </Box>

            <Box className="navbar-desktop-action">
              <Button
                variant="contained"
                className="navbar-cta"
                onClick={handlePlanTrip}
              >
                Plan Your Trip
              </Button>
            </Box>

            <IconButton
              aria-label="Open navigation menu"
              className="navbar-menu-button"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={handleDrawerToggle}
        PaperProps={{
          className: "navbar-drawer",
        }}
      >
        <Box className="navbar-drawer-content">
          <Box className="navbar-drawer-header">
            <Box className="navbar-drawer-brand">
              <FlightTakeoffIcon className="navbar-brand-icon" />
              <Typography className="navbar-brand-text">TravelSync</Typography>
            </Box>

            <IconButton
              aria-label="Close navigation menu"
              onClick={handleDrawerToggle}
            >
              <CloseIcon />
            </IconButton>
          </Box>

        <List className="navbar-mobile-list">
            {navLinks.map((link) => (
                <ListItem key={link.path} disablePadding>
                <NavLink
                    to={link.path}
                    end={link.path === "/"}
                    onClick={() => setIsDrawerOpen(false)}
                    className={({ isActive }) =>
                    `navbar-mobile-link ${
                        isActive ? "navbar-mobile-link-active" : ""
                    }`
                    }
                >
                    <ListItemButton>
                    <ListItemText primary={link.label} />
                    </ListItemButton>
                </NavLink>
                </ListItem>
            ))}
        </List>

          <Button
            variant="contained"
            fullWidth
            className="navbar-mobile-cta"
            onClick={handlePlanTrip}
          >
            Plan Your Trip
          </Button>
        </Box>
      </Drawer>
    </>
  );
}

export default Navbar;