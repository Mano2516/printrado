import { useNavigate } from "react-router-dom";
import "../css/wishlist.css";
import { Breadcrumb, Typography } from "antd";
export default function Wishlist({
  wishlist,
  setWishlist,
  cartItems,
  itemAddedToCart,
  setItemAddedToCart,
  setCartItems,
  setNavigate,
}) {
  const navigate = useNavigate();
  return (
    <div className="wishlist">
      <div className="title">
        <div className="ele">
          <Typography.Title className="heading"> Wishlist</Typography.Title>
          <Breadcrumb
            items={[
              {
                name: "Home",
                title: "Home",
                icon: "home",
                className: "breadcrumb-item",
                onClick: () => {
                  navigate("/");
                  setNavigate("home");
                },
              },
              { name: "Wishlist", title: "Wishlist" },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
