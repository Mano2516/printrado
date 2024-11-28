import { Alert } from "antd";
import { SoftwareBooks } from "../pagesContent/SoftWareBooks";
import Items from "./Items";
import { useEffect, useState } from "react";

export default function SoftWarePage({
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
  setSearch,
  search,
}) {
  // const [eles, setEles] = useState(HomePageElements);
  setPageItems(SoftwareBooks);
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
        it={SoftwareBooks}
        navigate={navigate}
        setNavigate={setNavigate}
        elements={elements}
        setElements={setElements}
        setItemToDisplay={setItemToDisplay}
        itemToDisplay={itemToDisplay}
        pageItems={pageItems}
        nav="soft"
        cartItems={cartItems}
        setCartItems={setCartItems}
        setItemAddedToCart={setItemAddedToCart}
        wishlist={wishlist}
        setWishlist={setWishlist}
        search={search}
        setSearch={setSearch}
      />
    </div>
  );
}
