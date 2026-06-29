import { useEffect, useState,useMemo } from "react";
import { Container, Typography ,Box} from "@mui/material";
import PackageGrid from "../../components/packages/PackageGrid/PackageGrid";
import { getPackages } from "../../services/services/packageService";
import SearchBar from "../../components/packages/SearchBar/SearchBar";
import { useSearchParams } from "react-router-dom";
import FilterBar from "../../components/packages/FilterBar/FilterBar";
import "./ExplorePackagesPage.css";

function ExplorePackagesPage() {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [searchParams, setSearchParams] = useSearchParams();

  const [searchValue, setSearchValue] = useState(
    searchParams.get("search") || ""
  );

  const [category, setCategory] = useState("");
  const [budget, setBudget] = useState("");
  const [duration, setDuration] = useState("");
  const [sortBy, setSortBy] = useState("");

  const handleSearchChange = (event) => {
  const value = event.target.value;

  setSearchValue(value);

  if (value.trim()) {
    setSearchParams({ search: value });
  } else {
    setSearchParams({});
  }
};

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const response = await getPackages();
        setPackages(response);
      } catch (err) {
        setError("Failed to load packages.");
      } finally {
        setLoading(false);
      }
    };

    fetchPackages();
  }, []);

  const filteredPackages = useMemo(() => {
  let filtered = [...packages];

  // Search
  if (searchValue.trim()) {
    const search = searchValue.toLowerCase();

    filtered = filtered.filter(
      (travelPackage) =>
        travelPackage.title.toLowerCase().includes(search) ||
        travelPackage.location.toLowerCase().includes(search) ||
        travelPackage.category.toLowerCase().includes(search)
    );
  }

  // Category
  if (category) {
    filtered = filtered.filter(
      (travelPackage) => travelPackage.category === category
    );
  }

  // Budget
  if (budget) {
    if (budget === "70000") {
      filtered = filtered.filter(
        (travelPackage) => travelPackage.price >= 70000
      );
    } else {
      const [minimumPrice, maximumPrice] = budget
        .split("-")
        .map(Number);

      filtered = filtered.filter(
        (travelPackage) =>
          travelPackage.price >= minimumPrice &&
          travelPackage.price <= maximumPrice
      );
    }
  }

  // Duration
if (duration) {
  if (duration === "8") {
    filtered = filtered.filter(
      (travelPackage) => travelPackage.duration >= 8
    );
  } else {
    const [minimumDays, maximumDays] = duration
      .split("-")
      .map(Number);

    filtered = filtered.filter(
      (travelPackage) =>
        travelPackage.duration >= minimumDays &&
        travelPackage.duration <= maximumDays
    );
  }
}

if (sortBy === "price-low") {
  filtered.sort((a, b) => a.price - b.price);
}

if (sortBy === "price-high") {
  filtered.sort((a, b) => b.price - a.price);
}

if (sortBy === "rating") {
  filtered.sort((a, b) => b.rating - a.rating);
}

if (sortBy === "duration") {
  filtered.sort((a, b) => a.duration - b.duration);
}

  return filtered;
}, [packages, searchValue, category,budget,duration,sortBy,]);

const handleCategoryChange = (event) => {
  setCategory(event.target.value);
};

const handleBudgetChange = (event) => {
  setBudget(event.target.value);
};

const handleDurationChange = (event) => {
  setDuration(event.target.value);
};

const handleSortChange = (event) => {
  setSortBy(event.target.value);
};

const handleClearFilters = () => {
  setSearchValue("");
  setCategory("");
  setBudget("");
  setDuration("");
  setSortBy("");

  setSearchParams({});
};

  if (loading) {
    return (
      <Container maxWidth="xl" sx={{ py: 5 }}>
        <Typography>Loading packages...</Typography>
      </Container>
    );
  }

  if (error) {
    return (
      <Container maxWidth="xl" sx={{ py: 5 }}>
        <Typography color="error">{error}</Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="xl" className="explore-packages-page">

  <Box className="explore-header">
    <Typography className="explore-header-subtitle">
      EXPLORE THE WORLD
    </Typography>

    <Typography className="explore-header-title">
      Find Your Perfect Journey
    </Typography>

    <Typography className="explore-header-description">
      Browse handpicked travel experiences across beaches, mountains,
      cities, wildlife, luxury escapes, and unforgettable adventures.
      Discover the destination that matches your travel style.
    </Typography>
  </Box>

  <SearchBar searchValue={searchValue} onSearchChange={handleSearchChange}/>

  <FilterBar category={category} budget={budget} duration={duration} sortBy={sortBy} onCategoryChange={handleCategoryChange} 
  onBudgetChange={handleBudgetChange} onDurationChange={handleDurationChange} onSortChange={handleSortChange} 
  onClearFilters={handleClearFilters}
/>

  <PackageGrid packages={filteredPackages} />

</Container>
  );
}

export default ExplorePackagesPage;