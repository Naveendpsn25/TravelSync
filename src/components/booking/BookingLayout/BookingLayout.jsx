import { Grid, Paper, Button, Box } from "@mui/material";
import "./BookingLayout.css";

function BookingLayout({
  leftContent,
  rightContent,
  onBack,
  onNext,
  disableBack,
  disableNext,
  nextButtonText,
}) {
  return (
    <Grid container spacing={4} className="booking-layout">

      {/* Left Section */}
      <Grid size={{ xs: 12, lg: 8 }}>
        <Paper className="booking-left-panel">

          <Box className="booking-form-content">
            {leftContent}
          </Box>

          <Box className="booking-navigation">
            <Button
              variant="outlined"
              onClick={onBack}
              disabled={disableBack}
            >
              Back
            </Button>

            <Button
            variant="contained"
            onClick={onNext}
            disabled={disableNext}
            >
            {nextButtonText}
            </Button>
          </Box>

        </Paper>
      </Grid>

      {/* Right Section */}
      <Grid size={{ xs: 12, lg: 4 }}>
        <div className="booking-summary-wrapper">
          {rightContent}
        </div>
      </Grid>

    </Grid>
  );
}

export default BookingLayout;