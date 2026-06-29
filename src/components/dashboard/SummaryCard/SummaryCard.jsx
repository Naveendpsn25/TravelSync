import { Card, CardActionArea, Typography, Box } from "@mui/material";

import "./SummaryCard.css";

function SummaryCard({
  icon,
  title,
  value,
  clickable = false,
  onClick,
}) {
  return (
    <Card className="summary-card">
      <CardActionArea
        className="summary-card-action"
        onClick={onClick}
        disabled={!clickable}
      >
        <Box className="summary-card-left">
          <Box className="summary-icon">
            {icon}
          </Box>
        </Box>

        <Box className="summary-card-right">
          <Typography
            variant="h4"
            className="summary-card-value"
          >
            {value}
          </Typography>

          <Typography className="summary-card-title">
            {title}
          </Typography>
        </Box>
      </CardActionArea>
    </Card>
  );
}

export default SummaryCard;