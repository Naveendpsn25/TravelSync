import {
  Box,
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import SavingsOutlinedIcon from "@mui/icons-material/SavingsOutlined";
import TravelExploreOutlinedIcon from "@mui/icons-material/TravelExploreOutlined";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import "./WhyChooseUs.css";

const benefits = [
  {
    title: "Best Price Promise",
    description:
      "Great travel experiences at transparent prices, with no hidden surprises.",
    icon: <SavingsOutlinedIcon />,
  },
  {
    title: "Curated Experiences",
    description:
      "Every trip is thoughtfully planned to give you more meaningful moments.",
    icon: <TravelExploreOutlinedIcon />,
  },
  {
    title: "Easy & Secure Booking",
    description:
      "Plan your journey with a simple booking flow designed for confidence.",
    icon: <VerifiedUserOutlinedIcon />,
  },
  {
    title: "Travel Support",
    description:
      "Get helpful guidance whenever you need it, before and during your trip.",
    icon: <SupportAgentOutlinedIcon />,
  },
];

function WhyChooseUs() {
  return (
    <Box component="section" className="why-choose-us">
      <Container maxWidth="xl">
        <Stack
          spacing={1.2}
          alignItems={{ xs: "flex-start", md: "center" }}
          textAlign={{ xs: "left", md: "center" }}
          className="why-choose-us-heading"
        >
          <Typography component="p" className="section-eyebrow">
            WHY TRAVELLERS CHOOSE US
          </Typography>

          <Typography component="h2" className="section-title">
            Travel Better, Without the Stress
          </Typography>

          <Typography className="section-description">
            We make planning easier, so you can focus on the excitement of the
            journey ahead.
          </Typography>
        </Stack>

        <Grid container spacing={{ xs: 2, sm: 2.5, md: 3 }}>
          {benefits.map((benefit) => (
            <Grid key={benefit.title} size={{ xs: 12, sm: 6, lg: 3 }}>
              <Paper elevation={0} className="why-choose-us-card">
                <Stack spacing={2}>
                  <Box className="why-choose-us-icon">{benefit.icon}</Box>

                  <Typography component="h3" className="why-choose-us-title">
                    {benefit.title}
                  </Typography>

                  <Typography className="why-choose-us-description">
                    {benefit.description}
                  </Typography>
                </Stack>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default WhyChooseUs;