import React from "react";
import { useWishlistContext } from "../../context/wishlist/wishlistContext";

export const Wishlist = () => {
  const { wishlistState, deleteFromWishlist } = useWishlistContext();

  return (
    <>
      <div>Wishlist</div>
      <ul>
        {wishlistState.wishlist.map((item) => {
          return (
            <li>
              {item.name}{" "}
              <button onClick={() => deleteFromWishlist(item._id)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </>
  );
};
