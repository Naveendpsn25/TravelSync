import {
  Container,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import "./ItinerarySection.css";

function ItinerarySection({ travelPackage }) {
  return (
    <Container maxWidth="lg">
      <Paper elevation={0} className="itinerary-section">

        <Typography
          variant="h4"
          className="itinerary-title"
        >
          Day-wise Itinerary
        </Typography>

        <Grid container spacing={3}>
          {travelPackage.itinerary.map((item) => (
            <Grid
              key={item.day}
              size={{ xs: 12 }}
            >
              <Paper
                elevation={0}
                className="itinerary-card"
              >
                <Typography className="itinerary-day">
                  Day {item.day}
                </Typography>

                <Typography className="itinerary-card-title">
                  {item.title}
                </Typography>

                <Typography className="itinerary-description">
                  {item.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

      </Paper>
    </Container>
  );
}

export default ItinerarySection;