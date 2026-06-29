import {
  Container,
  Grid,
  Paper,
  Typography,
  Stack,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import "./HighlightsSection.css";

function HighlightsSection({ travelPackage }) {
  return (
    <Container maxWidth="lg">
      <Paper elevation={0} className="highlights-section">
        <Typography
          variant="h4"
          className="highlights-title"
        >
          Trip Highlights
        </Typography>

        <Grid container spacing={3}>
          {travelPackage.highlights.map((highlight, index) => (
            <Grid
              key={index}
              size={{ xs: 12, sm: 6 }}
            >
              <Paper
                elevation={0}
                className="highlight-card"
              >
                <Stack
                  direction="row"
                  spacing={2}
                  alignItems="center"
                >
                  <CheckCircleIcon className="highlight-icon" />

                  <Typography className="highlight-text">
                    {highlight}
                  </Typography>
                </Stack>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Container>
  );
}

export default HighlightsSection;