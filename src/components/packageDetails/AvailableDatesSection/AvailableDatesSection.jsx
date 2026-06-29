import {
  Chip,
  Container,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import "./AvailableDatesSection.css";

function AvailableDatesSection({ travelPackage }) {
  return (
    <Container maxWidth="lg">
      <Paper elevation={0} className="available-dates-section">

        <Typography
          variant="h4"
          className="available-dates-title"
        >
          Available Departure Dates
        </Typography>

        <Stack
          direction="row"
          spacing={2}
          useFlexGap
          flexWrap="wrap"
        >
          {travelPackage.availableDates.map((date) => (
            <Chip
              key={date}
              label={new Date(date).toLocaleDateString("en-IN", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
              color="primary"
              variant="outlined"
            />
          ))}
        </Stack>

      </Paper>
    </Container>
  );
}

export default AvailableDatesSection;