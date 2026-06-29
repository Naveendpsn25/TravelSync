import { Container, Typography,Box } from "@mui/material";
import "./WishlistPage.css";
import { useEffect, useState } from "react";
import { getWishlist } from "../../services/services/wishlistService";
import WishlistGrid from "../../components/wishlist/WishlistGrid/WishlistGrid";
import { removeFromWishlist } from "../../services/services/wishlistService";


function WishlistPage() {
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const handleRemove = async (id) => {
  try {
    await removeFromWishlist(id);

    setWishlist((previousWishlist) =>
      previousWishlist.filter((travelPackage) => travelPackage.id !== id)
    );
  } catch (error) {
    console.error(error);
  }
};

  useEffect(() => {
  const fetchWishlist = async () => {
    try {
      const data = await getWishlist();
      setWishlist(data);
    } catch (error) {
      setError("Failed to load wishlist.");
    } finally {
      setLoading(false);
    }
  };

  fetchWishlist();
}, []);

if (loading) {
  return (
    <Container maxWidth="xl">
      <Typography>Loading wishlist...</Typography>
    </Container>
  );
}

if (error) {
  return (
    <Container maxWidth="xl">
      <Typography color="error">{error}</Typography>
    </Container>
  );
}


  return (
    <Container maxWidth="lg" className="wishlist-page">
      <Box className="wishlist-header">
      <Typography className="wishlist-subtitle">
        SAVED DESTINATIONS
      </Typography>

      <Typography className="wishlist-title">
        My Wishlist
      </Typography>

      <Typography className="wishlist-description">
        Save your dream destinations in one place. Review your favourite trips,
        compare packages, and book them whenever you're ready.
      </Typography>
    </Box>

      <WishlistGrid wishlist={wishlist} onRemove={handleRemove}/>
    </Container>
  );
}

export default WishlistPage;