import "./Wishlist.css";
import { useWishlistContext } from "../../context/wishlist/wishlistContext";
import { ProductCard } from "../../Components/ProductCard/ProductCard";
export const Wishlist = () => {
  const { wishlistState, deleteFromWishlist } = useWishlistContext();
  

  return (
    <>
     <div className="wishlist-section">
     <div className="wishlist-section-header">
     <h1 className="wishlist-section-title">Wishlist</h1>
     {!wishlistState.wishlist.length>0 && <h1 className="wishlist-empty-title">Empty wishlist</h1>}
      </div>

      <div className="wishlistDisplay-section">
      <ul className="wishlist-items">
        {wishlistState.wishlist.map((product) => {
          return <ProductCard key={product._id} productData={product} />;
        })}
      </ul>
      </div>
      
     </div>
    </>
  );
};
