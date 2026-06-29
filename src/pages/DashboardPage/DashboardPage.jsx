import { Container } from "@mui/material";
import DashboardHeader from "../../components/dashboard/DashboardHeader/DashboardHeader";
import SummaryCards from "../../components/dashboard/SummaryCards/SummaryCards";
import UpcomingTrip from "../../components/dashboard/UpcomingTrip/UpcomingTrip";
import RecentBookings from "../../components/dashboard/RecentBookings/RecentBookings";
import QuickActions from "../../components/dashboard/QuickActions/QuickActions";

import "./DashboardPage.css";

function DashboardPage() {
  return (
    <Container maxWidth="xl" className="dashboard-page ">

      <DashboardHeader />

      <SummaryCards />

      {/* <UpcomingTrip /> */}

      <RecentBookings />

      <QuickActions />

    </Container>
  );
}

export default DashboardPage;