import {
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import "./IncludedSection.css";

function IncludedSection({ travelPackage }) {
  return (
    <Grid size={{ xs: 12, md: 6 }}>
      <Paper elevation={0} className="included-section">

        <Typography
          variant="h5"
          className="included-title"
        >
          What's Included
        </Typography>

        <Stack spacing={2}>
          {travelPackage.included.map((item, index) => (
            <Stack
              key={index}
              direction="row"
              spacing={2}
              alignItems="center"
            >
              <CheckCircleIcon className="included-icon" />

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

export default IncludedSection;