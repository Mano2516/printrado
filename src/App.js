import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
// import Nav from "./components/Nav";
import Footer from "./components/Footer";
import PageContent from "./components/PageContent";

function App() {
  const [navigate, setNavigate] = useState("");
  const [pageEle, setpageEle] = useState("");
  const [itemToDisplay, setItemToDisplay] = useState([]);
  const [pageItems, setPageItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [search, setSearch] = useState("");
  return (
    <div style={{ minHeight: "100vh" }}>
      <Header
        navigate={navigate}
        setNavigate={setNavigate}
        setElements={setpageEle}
        elements={pageEle}
        setItemToDisplay={setItemToDisplay}
        itemToDisplay={itemToDisplay}
        cartItems={cartItems}
        setCartItems={setCartItems}
        wishlist={wishlist}
        setWishlist={setWishlist}
        search={search}
        setSearch={setSearch}
      />
      <PageContent
        navigate={navigate}
        setNavigate={setNavigate}
        setElements={setpageEle}
        elements={pageEle}
        setItemToDisplay={setItemToDisplay}
        itemToDisplay={itemToDisplay}
        pageItems={pageItems}
        setPageItems={setPageItems}
        cartItems={cartItems}
        setCartItems={setCartItems}
        wishlist={wishlist}
        setWishlist={setWishlist}
        search={search}
        setSearch={setSearch}
      />
      <Footer
        navigate={navigate}
        setNavigate={setNavigate}
        setElements={setpageEle}
        elements={pageEle}
      />
    </div>
  );
}

export default App;
