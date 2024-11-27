import { Alert } from "antd";
import { DataBooks } from "../pagesContent/DataBooks";
import Items from "./Items";
import { useEffect, useState } from "react";

export default function DataPage({
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
  setPageItems(DataBooks);
  const [showAlert, setShowAlert] = useState(false);
  const [AlretAlreday, setAlretAlreday] = useState(false);
  useEffect(() => {
    if (itemAddedToCart === "done") {
      setShowAlert(true);
      const timer = setTimeout(() => {
        setItemAddedToCart("");
        setShowAlert(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [itemAddedToCart]);
  useEffect(() => {
    if (itemAddedToCart === "not") {
      setAlretAlreday(true);
      const timer0 = setTimeout(() => {
        setItemAddedToCart("");
        setAlretAlreday(false);
      }, 3000);
      return () => clearTimeout(timer0);
    }
  }, [itemAddedToCart]);

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
        it={DataBooks}
        navigate={navigate}
        setNavigate={setNavigate}
        elements={elements}
        setElements={setElements}
        setItemToDisplay={setItemToDisplay}
        itemToDisplay={itemToDisplay}
        pageItems={pageItems}
        nav="data"
        cartItems={cartItems}
        setCartItems={setCartItems}
        setItemAddedToCart={setItemAddedToCart}
        wishlist={wishlist}
        setWishlist={setWishlist}
      />
    </div>
  );
}
