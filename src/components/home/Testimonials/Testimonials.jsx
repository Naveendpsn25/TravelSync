import {
  Avatar,
  Box,
  Container,
  Grid,
  Paper,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import "./Testimonials.css";

const testimonials = [
  {
    name: "Arun Kumar",
    location: "Chennai, India",
    rating: 5,
    initials: "AK",
    review:
      "TravelSync made planning my Bali trip very easy. I could compare packages, save my favourites, and organize everything in one place.",
  },
  {
    name: "Priya Sharma",
    location: "Bengaluru, India",
    rating: 5,
    initials: "PS",
    review:
      "The package details were clear and the booking flow felt simple. I especially liked being able to plan my itinerary before booking.",
  },
  {
    name: "Rahul Verma",
    location: "Mumbai, India",
    rating: 4,
    initials: "RV",
    review:
      "A clean and helpful travel platform. The destination options and package information helped me choose a trip with confidence.",
  },
];

function Testimonials() {
  return (
    <Box component="section" className="testimonials">
      <Container maxWidth="xl">
        <Box className="testimonials-heading">
          <Typography className="section-eyebrow">
            TRAVELLERS LOVE US
          </Typography>

          <Typography variant="h2" className="section-title">
            Stories From Happy Explorers
          </Typography>

          <Typography className="section-description">
            See how travellers are discovering destinations and planning
            memorable journeys with TravelSync.
          </Typography>
        </Box>

        <Grid container spacing={{ xs: 2, sm: 3 }}>
          {testimonials.map((testimonial) => (
            <Grid key={testimonial.name} size={{ xs: 12, md: 4 }}>
              <Paper elevation={0} className="testimonial-card">
                <Stack spacing={2.5}>
                  <Box className="testimonial-quote-icon">
                    <FormatQuoteIcon />
                  </Box>

                  <Typography className="testimonial-review">
                    “{testimonial.review}”
                  </Typography>

                  <Rating
                    value={testimonial.rating}
                    readOnly
                    size="small"
                    className="testimonial-rating"
                  />

                  <Box className="testimonial-user">
                    <Avatar className="testimonial-avatar">
                      {testimonial.initials}
                    </Avatar>

                    <Box>
                      <Typography className="testimonial-name">
                        {testimonial.name}
                      </Typography>

                      <Typography className="testimonial-location">
                        {testimonial.location}
                      </Typography>
                    </Box>
                  </Box>
                </Stack>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Testimonials;