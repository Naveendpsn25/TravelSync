import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPackageById } from "../../services/services/packageService";
import { Container, Typography,Grid } from "@mui/material";
import HeroSection from "../../components/packageDetails/HeroSection/HeroSection";
import AboutSection from "../../components/packageDetails/AboutSection/AboutSection";
import HighlightsSection from "../../components/packageDetails/HighlightsSection/HighlightsSection";
import ItinerarySection from "../../components/packageDetails/ItinerarySection/ItinerarySection";


import IncludedSection from "../../components/packageDetails/IncludedSection/IncludedSection";
import ExcludedSection from "../../components/packageDetails/ExcludedSection/ExcludedSection";
import AvailableDatesSection from "../../components/packageDetails/AvailableDatesSection/AvailableDatesSection";
import ActionSection from "../../components/packageDetails/ActionSection/ActionSection";
import PackageNotFound from "../PackageNotFound/PackageNotFound";

import "./PackageDetailsPage.css";

function PackageDetailsPage() {
  const { id } = useParams();

const [travelPackage, setTravelPackage] = useState(null);
const [loading, setLoading] = useState(true);

useEffect(() => {
  async function fetchPackage() {
    setLoading(true);

    try {
      const data = await getPackageById(id);
      setTravelPackage(data);
    } catch (error) {
      console.error(error);
      setTravelPackage(null);
    } finally {
      setLoading(false);
    }
  }

  fetchPackage();
}, [id]);


 if (loading) {
  return (
    <Container maxWidth="lg">
      <Typography variant="h5" align="center" sx={{ mt: 8 }}>
        Loading...
      </Typography>
    </Container>
  );
}

  if (!travelPackage) {
     return <PackageNotFound />;
  }

  return (
  <Container maxWidth="lg" className="package-details-page">
    <HeroSection travelPackage={travelPackage} />
    <ActionSection travelPackage={travelPackage} />

    <AboutSection travelPackage={travelPackage} />
    <HighlightsSection travelPackage={travelPackage} />
    <ItinerarySection travelPackage={travelPackage} />
    <Container maxWidth="lg" sx={{ mt: 5, mb: 5 }}>
      <Grid container spacing={3}>
        <IncludedSection travelPackage={travelPackage} />
        <ExcludedSection travelPackage={travelPackage} />
      </Grid>
    </Container>
    <AvailableDatesSection travelPackage={travelPackage} />
  </Container>
);
}

export default PackageDetailsPage;