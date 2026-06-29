import {
  Button,
  Paper,
  Stack,
  Typography,
  Alert,
  Snackbar
} from "@mui/material";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LuggageIcon from "@mui/icons-material/Luggage";
import "./ActionSection.css";
import { addToWishlist,getWishlist, } from "../../../services/services/wishlistService";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ActionSection({ travelPackage }) {
    const navigate = useNavigate();

    function handleBookNow() {
      navigate(`/booking/${travelPackage.id}`);
    }
    
     const [snackbar, setSnackbar] = useState({
            open: false,
            message: "",
            severity: "success",
        });

        
        async function handleAddToWishlist() {
            try {
                const wishlist = await getWishlist();

                // console.log(wishlist);
                // console.log(travelPackage.id);

                const packageExists = wishlist.some(
                  (item) => String(item.packageId) === String(travelPackage.id)
                );

                // If already exists
                if (packageExists) {
                  setSnackbar({
                    open: true,
                    message: "Package is already in your wishlist.",
                    severity: "warning",
                  });

                  return; // Stop here, don't add again
                }

                 // Add only if it doesn't exist
                await addToWishlist({
                  ...travelPackage,
                  packageId: travelPackage.id,
                });

                setSnackbar({
                open: true,
                message: "Package added to wishlist successfully.",
                severity: "success",
              });


            } catch (error) {
                 setSnackbar({
                    open: true,
                    message: "Failed to add package to wishlist.",
                    severity: "error",
                });
            }
            }

        const handleCloseSnackbar = (_, reason) => {
    if (reason === "clickaway") return;

    setSnackbar((previous) => ({
      ...previous,
      open: false,
    }));
  };

  return (
    <>
    <Stack
  direction={{ xs: "column", sm: "row" }}
  spacing={2}
  className="package-action-buttons"
>
      <Button
      variant="outlined"
      startIcon={<FavoriteBorderIcon />}
      onClick={handleAddToWishlist}
        >
        Add to Wishlist
        </Button>

      

      <Button
        variant="contained"
        onClick={handleBookNow}
      >
        Book Now
  </Button>
</Stack>

        <Snackbar
    open={snackbar.open}
    autoHideDuration={3000}
    onClose={handleCloseSnackbar}
  >
    <Alert
      severity={snackbar.severity}
      onClose={handleCloseSnackbar}
    >
      {snackbar.message}
    </Alert>
  </Snackbar>
  </>
  );
}

export default ActionSection;