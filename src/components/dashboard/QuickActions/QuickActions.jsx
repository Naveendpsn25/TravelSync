import {
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Typography,
  Box,
} from "@mui/material";

import LuggageIcon from "@mui/icons-material/Luggage";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AssignmentIcon from "@mui/icons-material/Assignment";

import { useNavigate } from "react-router-dom";

import "./QuickActions.css";

function QuickActions() {
  const navigate = useNavigate();

  const actions = [
    {
      title: "Browse Packages",
      icon: <LuggageIcon fontSize="large" />,
      route: "/packages",
    },
    {
      title: "Wishlist",
      icon: <FavoriteIcon fontSize="large" />,
      route: "/wishlist",
    },
    {
      title: "My Bookings",
      icon: <AssignmentIcon fontSize="large" />,
      route: "/my-bookings",
    },
  ];

  return (
    <Box className="quick-actions-section">

      <Typography
        variant="h5"
        className="quick-actions-title"
      >
        Quick Actions
      </Typography>

      <Grid container spacing={3}>

        {actions.map((action) => (
          <Grid
            key={action.title}
            size={{
              xs: 12,
              sm: 6,
              md: 4,
            }}
          >
            <Card className="quick-action-card">

              <CardActionArea
                onClick={() => navigate(action.route)}
              >
                <CardContent className="quick-action-content">

                  <Box className="quick-action-icon">
                    {action.icon}
                  </Box>

                  <Typography
                    variant="h6"
                    className="quick-action-text"
                  >
                    {action.title}
                  </Typography>

                </CardContent>
              </CardActionArea>

            </Card>
          </Grid>
        ))}

      </Grid>

    </Box>
  );
}

export default QuickActions;