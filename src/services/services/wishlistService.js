import { apiRequest } from "./api";

// Get all wishlist items
export function getWishlist() {
  return apiRequest("/wishlist");
}

// Add package to wishlist
export function addToWishlist(travelPackage) {
  return apiRequest("/wishlist", {
    method: "POST",
    body: JSON.stringify(travelPackage),
  });
}

// Remove package from wishlist
export function removeFromWishlist(id) {
  return apiRequest(`/wishlist/${id}`, {
    method: "DELETE",
  });
}


