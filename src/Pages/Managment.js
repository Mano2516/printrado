import { Alert } from "antd";
import { ManagementBooks } from "../pagesContent/ManagmentBooks";
import Items from "./Items";
import { useEffect, useState } from "react";

export default function ManagmentPage({
  navigate,
  setNavigate,
  elements,
  setElements,
  setItemToDisplay,
  itemToDisplay,
  setPageItems,
  pageItems,
  cartItems,
  setCartItems,
  itemAddedToCart,
  setItemAddedToCart,
  setWishlist,
  wishlist,
}) {
  // const [eles, setEles] = useState(HomePageElements);
  const [showAlert, setShowAlert] = useState(false);
  const [AlretAlreday, setAlretAlreday] = useState(false);
  useEffect(() => {
    if (itemAddedToCart === "done") {
      setShowAlert(true);
      const timer = setTimeout(() => {
        setShowAlert(false);
        setItemAddedToCart("");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [itemAddedToCart]);
  useEffect(() => {
    if (itemAddedToCart === "not") {
      setAlretAlreday(true);
      const timer0 = setTimeout(() => {
        setAlretAlreday(false);
        setItemAddedToCart("");
      }, 3000);
      return () => clearTimeout(timer0);
    }
  }, [itemAddedToCart]);

  setPageItems(ManagementBooks);
  return (
    <div>
      {showAlert && (
        <Alert
          message="Item added to cart!"
          type="success"
          showIcon
          style={{
            width: "fit-content",
            margin: "0 auto",
            marginTop: 20,
            position: "relative",
          }}
        />
      )}
      {AlretAlreday && (
        <Alert
          message="Item already at cart!"
          type="warning"
          showIcon
          style={{
            width: "fit-content",
            margin: "0 auto",
            marginTop: 20,
            position: "relative",
          }}
        />
      )}
      <Items
        it={ManagementBooks}
        navigate={navigate}
        setNavigate={setNavigate}
        elements={elements}
        setElements={setElements}
        setItemToDisplay={setItemToDisplay}
        itemToDisplay={itemToDisplay}
        pageItems={pageItems}
        nav="management"
        cartItems={cartItems}
        setCartItems={setCartItems}
        setItemAddedToCart={setItemAddedToCart}
        wishlist={wishlist}
        setWishlist={setWishlist}
      />
    </div>
  );
}
