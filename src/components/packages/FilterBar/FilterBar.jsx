import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
} from "@mui/material";
import "./FilterBar.css";

function FilterBar({
  category,
  budget,
  duration,
  sortBy,
  onCategoryChange,
  onBudgetChange,
  onDurationChange,
  onSortChange,
  onClearFilters,
}) {
  return (
    <Paper elevation={0} className="filter-bar">

      <Grid container spacing={2}>

        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <FormControl fullWidth>
            <InputLabel>Category</InputLabel>

            <Select
              value={category}
              label="Category"
              onChange={onCategoryChange}
            >
              <MenuItem value="">All Categories</MenuItem>
              <MenuItem value="Beach">Beach</MenuItem>
              <MenuItem value="Mountain">Mountain</MenuItem>
              <MenuItem value="Adventure">Adventure</MenuItem>
              <MenuItem value="Wildlife">Wildlife</MenuItem>
              <MenuItem value="Luxury">Luxury</MenuItem>
              <MenuItem value="City">City</MenuItem>
            </Select>

          </FormControl>
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <FormControl fullWidth>
            <InputLabel>Budget</InputLabel>

            <Select
              value={budget}
              label="Budget"
              onChange={onBudgetChange}
            >
              <MenuItem value="">All Budgets</MenuItem>
              <MenuItem value="0-30000">Below ₹30,000</MenuItem>
              <MenuItem value="30000-50000">₹30,000 - ₹50,000</MenuItem>
              <MenuItem value="50000-70000">₹50,000 - ₹70,000</MenuItem>
              <MenuItem value="70000">Above ₹70,000</MenuItem>
            </Select>

          </FormControl>
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <FormControl fullWidth>
            <InputLabel>Duration</InputLabel>

            <Select
              value={duration}
              label="Duration"
              onChange={onDurationChange}
            >
              <MenuItem value="">All Durations</MenuItem>
              <MenuItem value="1-4">1 - 4 Days</MenuItem>
              <MenuItem value="5-7">5 - 7 Days</MenuItem>
              <MenuItem value="8">8+ Days</MenuItem>
            </Select>

          </FormControl>
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <FormControl fullWidth>
            <InputLabel>Sort By</InputLabel>

            <Select
              value={sortBy}
              label="Sort By"
              onChange={onSortChange}
            >
              <MenuItem value="">Default</MenuItem>
              <MenuItem value="price-low">
                Price: Low to High
              </MenuItem>
              <MenuItem value="price-high">
                Price: High to Low
              </MenuItem>
              <MenuItem value="rating">
                Highest Rating
              </MenuItem>
              <MenuItem value="duration">
                Shortest Duration
              </MenuItem>
            </Select>

          </FormControl>
        </Grid>

      </Grid>

      <Box className="filter-bar-actions">
        <Button
          variant="outlined"
          onClick={onClearFilters}
        >
          Clear Filters
        </Button>
      </Box>

    </Paper>
  );
}

export default FilterBar;