import {
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import "./ExcludedSection.css";

function ExcludedSection({ travelPackage }) {
  return (
    <Grid size={{ xs: 12, md: 6 }}>
      <Paper elevation={0} className="excluded-section">

        <Typography
          variant="h5"
          className="excluded-title"
        >
          What's Not Included
        </Typography>

        <Stack spacing={2}>
          {travelPackage.excluded.map((item, index) => (
            <Stack
              key={index}
              direction="row"
              spacing={2}
              alignItems="center"
            >
              <CancelIcon className="excluded-icon" />

              <Typography>
                {item}
              </Typography>
            </Stack>
          ))}
        </Stack>

      </Paper>
    </Grid>
  );
}

export default ExcludedSection;