import { Container, Paper, Typography } from "@mui/material";
import "./AboutSection.css";

function AboutSection({ travelPackage }) {
  return (
    <Container maxWidth="lg">
      <Paper elevation={0} className="about-section">

        <Typography
          variant="h4"
          className="about-section-title"
        >
          About This Trip
        </Typography>

        <Typography className="about-section-description">
          {travelPackage.description}
        </Typography>

      </Paper>
    </Container>
  );
}

export default AboutSection;