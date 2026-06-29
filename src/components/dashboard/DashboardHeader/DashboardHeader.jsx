import { Paper, Typography } from "@mui/material";
import "./DashboardHeader.css";

function DashboardHeader() {
  return (
    <Paper className="dashboard-header">

      <Typography variant="h4" className="dashboard-title">
        Welcome Back 👋
      </Typography>

      <Typography className="dashboard-subtitle">
        Manage your trips and bookings from one place.
      </Typography>

    </Paper>
  );
}

export default DashboardHeader;