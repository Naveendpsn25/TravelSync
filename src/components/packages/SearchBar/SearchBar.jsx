import {
  Box,
  InputAdornment,
  Paper,
  TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import "./SearchBar.css";

function SearchBar({ searchValue, onSearchChange }) {
  return (
    <Box className="search-bar-container">
      <Paper elevation={0} className="search-bar-paper">
        <TextField
          fullWidth
          placeholder="Search destination or package..."
          value={searchValue}
          onChange={onSearchChange}
          variant="outlined"
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            },
          }}
        />
      </Paper>
    </Box>
  );
}

export default SearchBar;