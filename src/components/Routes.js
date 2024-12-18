import { Route, Routes } from "react-router-dom";
import Login from "../Pages/Login";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import DisplayItem from "../Pages/DisplayItem";
import HomePage from "../Pages/HomePage";
import SoftWarePage from "../Pages/SoftWare";
import DataPage from "../Pages/Data";
import CyberPage from "../Pages/Cyber";
import TechPage from "../Pages/Tech";
import ManagmentPage from "../Pages/Managment";
import SelfPage from "../Pages/Self";
import { useState } from "react";
import Wishlist from "./Wishlist";
import Cart from "../Pages/CartPage";
import Checkout from "../Pages/Checkout";

export default function AppRoutes({
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
  wishlist,
  setWishlist,
  setSearch,
  search,
}) {
  const [itemAddedToCart, setItemAddedToCart] = useState("");

  return (
    <Routes>
      <Route
        path="/"
        key={"home"}
        element={
          <HomePage
            navigate={navigate}
            setNavigate={setNavigate}
            elements={elements}
            setElements={setElements}
            setItemToDisplay={setItemToDisplay}
            itemToDisplay={itemToDisplay}
            pageItems={pageItems}
            setPageItems={setPageItems}
            cartItems={cartItems}
            setCartItems={setCartItems}
            itemAddedToCart={itemAddedToCart}
            setItemAddedToCart={setItemAddedToCart}
            wishlist={wishlist}
            setWishlist={setWishlist}
            search={search}
            setSearch={setSearch}
          />
        }
      />
      <Route
        path="/soft"
        key={"soft"}
        element={
          <SoftWarePage
            navigate={navigate}
            setNavigate={setNavigate}
            elements={elements}
            setElements={setElements}
            setItemToDisplay={setItemToDisplay}
            itemToDisplay={itemToDisplay}
            pageItems={pageItems}
            setPageItems={setPageItems}
            cartItems={cartItems}
            setCartItems={setCartItems}
            itemAddedToCart={itemAddedToCart}
            setItemAddedToCart={setItemAddedToCart}
            wishlist={wishlist}
            setWishlist={setWishlist}
            search={search}
            setSearch={setSearch}
          />
        }
      />
      <Route
        path="/data"
        key="data"
        element={
          <DataPage
            navigate={navigate}
            setNavigate={setNavigate}
            elements={elements}
            setElements={setElements}
            setItemToDisplay={setItemToDisplay}
            itemToDisplay={itemToDisplay}
            pageItems={pageItems}
            setPageItems={setPageItems}
            cartItems={cartItems}
            setCartItems={setCartItems}
            itemAddedToCart={itemAddedToCart}
            setItemAddedToCart={setItemAddedToCart}
            wishlist={wishlist}
            setWishlist={setWishlist}
            search={search}
            setSearch={setSearch}
          />
        }
      />
      <Route
        path="/cyber"
        key={"cyber"}
        element={
          <CyberPage
            navigate={navigate}
            setNavigate={setNavigate}
            elements={elements}
            setElements={setElements}
            setItemToDisplay={setItemToDisplay}
            itemToDisplay={itemToDisplay}
            pageItems={pageItems}
            setPageItems={setPageItems}
            cartItems={cartItems}
            setCartItems={setCartItems}
            itemAddedToCart={itemAddedToCart}
            setItemAddedToCart={setItemAddedToCart}
            wishlist={wishlist}
            setWishlist={setWishlist}
            search={search}
            setSearch={setSearch}
          />
        }
      />
      <Route
        path="/tech"
        key={"tech"}
        element={
          <TechPage
            navigate={navigate}
            setNavigate={setNavigate}
            elements={elements}
            setElements={setElements}
            setItemToDisplay={setItemToDisplay}
            itemToDisplay={itemToDisplay}
            pageItems={pageItems}
            setPageItems={setPageItems}
            cartItems={cartItems}
            setCartItems={setCartItems}
            itemAddedToCart={itemAddedToCart}
            setItemAddedToCart={setItemAddedToCart}
            wishlist={wishlist}
            setWishlist={setWishlist}
            search={search}
            setSearch={setSearch}
          />
        }
      />
      <Route
        path="/management"
        key={"management"}
        element={
          <ManagmentPage
            navigate={navigate}
            setNavigate={setNavigate}
            elements={elements}
            setElements={setElements}
            setItemToDisplay={setItemToDisplay}
            itemToDisplay={itemToDisplay}
            pageItems={pageItems}
            setPageItems={setPageItems}
            cartItems={cartItems}
            setCartItems={setCartItems}
            itemAddedToCart={itemAddedToCart}
            setItemAddedToCart={setItemAddedToCart}
            wishlist={wishlist}
            setWishlist={setWishlist}
            search={search}
            setSearch={setSearch}
          />
        }
      />
      <Route
        path="/self"
        key={"self"}
        element={
          <SelfPage
            navigate={navigate}
            setNavigate={setNavigate}
            elements={elements}
            setElements={setElements}
            setItemToDisplay={setItemToDisplay}
            itemToDisplay={itemToDisplay}
            pageItems={pageItems}
            setPageItems={setPageItems}
            cartItems={cartItems}
            setCartItems={setCartItems}
            itemAddedToCart={itemAddedToCart}
            setItemAddedToCart={setItemAddedToCart}
            wishlist={wishlist}
            setWishlist={setWishlist}
            search={search}
            setSearch={setSearch}
          />
        }
      />
      <Route
        path="/login"
        element={<Login navigate={navigate} setNavigate={setNavigate} />}
      />
      <Route
        path="/about"
        element={<About navigate={navigate} setNavigate={setNavigate} />}
      />
      <Route
        path="/contact"
        element={
          <Contact setNavigate={setNavigate} itemToDisplay={itemToDisplay} />
        }
      />
      <Route
        path="/product"
        element={
          <DisplayItem
            setItemToDisplay={setItemToDisplay}
            itemToDisplay={itemToDisplay}
            navigate={navigate}
            setNavigate={setNavigate}
            pageItems={pageItems}
            setPageItems={setPageItems}
            cartItems={cartItems}
            itemAddedToCart={itemAddedToCart}
            setItemAddedToCart={setItemAddedToCart}
            setCartItems={setCartItems}
            wishlist={wishlist}
            setWishlist={setWishlist}
          />
        }
      />
      <Route
        path="/wishlist"
        element={
          <Wishlist
            wishlist={wishlist}
            setWishlist={setWishlist}
            cartItems={cartItems}
            itemAddedToCart={itemAddedToCart}
            setItemAddedToCart={setItemAddedToCart}
            setCartItems={setCartItems}
            setNavigate={setNavigate}
            setItemToDisplay={setItemToDisplay}
            search={search}
            setSearch={setSearch}
          />
        }
      />
      <Route
        path="/cart"
        element={<Cart cartItems={cartItems} setCartItems={setCartItems} />}
      />
      <Route
        path="/checkout"
        element={<Checkout cartItems={cartItems} setCartItems={setCartItems} />}
      />
    </Routes>
  );
}
