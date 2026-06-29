import { Container, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import "./BookingPage.css";

import { getPackageById } from "../../services/services/packageService";

import BookingStepper from "../../components/booking/BookingStepper/BookingStepper";
import PackageNotFound from "../PackageNotFound/PackageNotFound";

function BookingPage() {
  const { packageId } = useParams();

  const [travelPackage, setTravelPackage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPackage() {
      setLoading(true);

      try {
        const data = await getPackageById(packageId);
        setTravelPackage(data);
      } finally {
        setLoading(false);
      }
    }

    fetchPackage();
  }, [packageId]);

  if (loading) {
    return <Typography>Loading...</Typography>;
  }

  if (!travelPackage) {
    return <PackageNotFound />;
  }

  return (
    <Container maxWidth="lg" className="booking-page">
      <BookingStepper travelPackage={travelPackage} />
    </Container>
  );
}

export default BookingPage;