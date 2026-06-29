import WishlistCard from "../WishlistCard/WishlistCard";
import "./WishlistGrid.css";

function WishlistGrid({ wishlist, onRemove }) {
  return (
    <div className="wishlist-grid">
      {wishlist.map((travelPackage) => (
        <WishlistCard
          key={travelPackage.id}
          travelPackage={travelPackage}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
}

export default WishlistGrid;