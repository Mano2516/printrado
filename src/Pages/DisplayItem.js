import { Alert, Breadcrumb, Collapse, Divider, List } from "antd";
import "../css/displayItemPage.css";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { CheckOutlined, HeartOutlined } from "@ant-design/icons";
export default function DisplayItem({
  itemToDisplay,
  setNavigate,
  setItemToDisplay,
  setPageItems,
  pageItems,
  setItemAddedToCart,
  itemAddedToCart,
  setCartItems,
  cartItems,
  setWishlist,
  wishlist,
}) {
  var product;
  if (localStorage.getItem("product")) {
    product = JSON.parse(localStorage.getItem("product"));
  }
  const [showAlert, setShowAlert] = useState(false);
  const [AlretAlreday, setAlretAlreday] = useState(false);
  useEffect(() => {
    try {
      const savedCart = JSON.parse(localStorage.getItem("cartItems")) || [];
      setCartItems(savedCart);
    } catch (error) {
      console.error("Failed to parse cart items from localStorage:", error);
      setCartItems([]); // Default to an empty cart
    }
  }, []);
  // window.localStorage.clear();
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
  useEffect(() => {
    try {
      const savedWishlist =
        JSON.parse(localStorage.getItem("wishlistItems")) || [];
      setWishlist(savedWishlist);
    } catch (error) {
      console.error("Failed to parse cart items from localStorage:", error);
      setWishlist([]);
    }
  }, []);
  const navigate = useNavigate();
  const [value, setValue] = useState(product.quantity);
  const [choose, setChoose] = useState("des");
  const items = [
    {
      key: "1",
      label: "Description",
      children: <p>{product.title}</p>,
    },
    {
      key: "2",
      label: "Shipping & Delivery",
      children: (
        <p>
          Books are delivered with a shipping company. Delivery duration is 2-4
          working days
        </p>
      ),
    },
  ];
  var exist = [];
  return (
    <div className="mainContainer">
      <div className="cont">
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
        <div className="DataSection">
          <div className="img">
            <img src={product.img} alt={product.title} />
          </div>
          <div className="info">
            <div className="itemTitle">{product.title}</div>
            <div className="priceContainer">
              {product.discount ? (
                <span>
                  <sapn className="oldPrice">{product.price} EGP</sapn>
                  <span className="newPrice">
                    {(
                      product.price -
                      (product.discoutRate / 100) * product.price
                    ).toFixed(0)}{" "}
                    EGP
                  </span>
                </span>
              ) : (
                <span className="newPrice">{product.price} EGP</span>
              )}
            </div>
            <div className="actions">
              <span className="changeValue">
                <button
                  className="inc"
                  onClick={() => {
                    if (value > 1) {
                      const newValue = value - 1;
                      setValue(newValue);
                    }
                  }}
                >
                  -
                </button>
                {/* {console.log(value)} */}
                <span className="value">{value}</span>
                <button
                  className="dec"
                  onClick={() => {
                    const newValue = value + 1;
                    setValue(newValue);
                  }}
                >
                  +
                </button>
              </span>

              <button
                className="addToCart"
                onClick={() => {
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth", // Smooth scrolling
                  });
                  const newCartItems = [...cartItems];
                  const itemExists = newCartItems.some(
                    (item) => item.title === product.title
                  );

                  if (!itemExists) {
                    newCartItems.push({ ...product, quantity: value });
                    window.localStorage.setItem(
                      "cartItems",
                      JSON.stringify(newCartItems)
                    );
                    setCartItems(newCartItems);
                    setItemAddedToCart("done");
                  } else {
                    setItemAddedToCart("not");
                  }
                  // console.log(cartItems);
                }}
              >
                Add to cart
              </button>
              <button className="buyNow">Buy now</button>
              <span
                className="fav"
                onClick={() => {
                  const newFavtItems = [...wishlist];
                  const itemExists = newFavtItems.some(
                    (item) => item.title === product.title
                  );
                  if (!itemExists) {
                    newFavtItems.push({ ...product });
                    window.localStorage.setItem(
                      "wishlistItems",
                      JSON.stringify(newFavtItems)
                    );
                    setWishlist(newFavtItems);
                  }
                }}
              >
                {
                  (exist = wishlist.some(
                    (item) => item.title === product.title
                  ) ? (
                    <div className="favEle">
                      <span className="favIcon">
                        <CheckOutlined />
                      </span>
                      <span
                        className="favText"
                        onClick={() => {
                          navigate("/wishlist");
                        }}
                      >
                        Browse wishlist
                      </span>
                    </div>
                  ) : (
                    <div className="favEle">
                      <span className="favIcon">
                        <HeartOutlined />
                      </span>
                      <span className="favText">Add to wishlist</span>
                    </div>
                  ))
                }
              </span>
            </div>
            <Divider />
            <div className="more">
              <div className="questions">
                <span
                  onClick={() => {
                    setChoose("des");
                  }}
                  className={choose === "des" ? "active" : ""}
                >
                  Description
                </span>
                <span
                  onClick={() => {
                    setChoose("ship");
                  }}
                  className={choose === "ship" ? "active" : ""}
                >
                  Shipping & Delivery
                </span>
              </div>
              <div className="answers">
                {choose === "des" && <span>{product.title}</span>}
                {choose === "ship" && (
                  <span>
                    Books are delivered with a shipping company. Delivery
                    duration is 2-4 working days
                  </span>
                )}
              </div>
            </div>
            <div className="faqs">
              <Collapse
                accordion={true}
                items={items}
                defaultActiveKey={["1"]}
                bordered={false}
                expandIconPosition="end"
                style={{
                  background: "transparent",
                }}
              />
            </div>
          </div>
        </div>
        <RelatedBooks
          pageItems={pageItems}
          setPageItems={setPageItems}
          setItemToDisplay={setItemToDisplay}
          setNavigate={setNavigate}
          setItemAddedToCart={setItemAddedToCart}
          itemAddedToCart={itemAddedToCart}
          setCartItems={setCartItems}
          cartItems={cartItems}
          value={value}
          setValue={setValue}
          wishlist={wishlist}
          setWishlist={setWishlist}
        />
      </div>
    </div>
  );
}

function RelatedBooks({
  pageItems,
  setNavigate,
  setItemToDisplay,
  setPageItems,
  setItemAddedToCart,
  itemAddedToCart,
  setCartItems,
  cartItems,
  value,
  setValue,
  wishlist,
  setWishlist,
}) {
  if (!pageItems || pageItems.length === 0) {
    return <div className="itemsContainer">No related books available.</div>;
  }

  const newOne = [...pageItems];
  newOne.length = 5;
  return (
    <div className="ItemsContainer">
      {newOne.map((product, index) => {
        // setValue(product.quantity);
        var exist = [];
        return (
          <div className="allItems" key={index}>
            <Link>
              <div className="card">
                <div className="cover">
                  <div className="pag">
                    {product.discount && (
                      <span className="badge">-{product.discoutRate}%</span>
                    )}
                    <span
                      className="fav"
                      onClick={() => {
                        const newFavtItems = [...wishlist];
                        const itemExists = newFavtItems.some(
                          (item) => item.title === product.title
                        );
                        if (!itemExists) {
                          newFavtItems.push({ ...product });
                          window.localStorage.setItem(
                            "wishlistItems",
                            JSON.stringify(newFavtItems)
                          );
                          setWishlist(newFavtItems);
                        }
                      }}
                    >
                      {
                        (exist = wishlist.some(
                          (item) => item.title === product.title
                        ) ? (
                          <CheckOutlined />
                        ) : (
                          <HeartOutlined />
                        ))
                      }
                    </span>
                  </div>
                  <Link
                    key={product.title || index}
                    to="/product"
                    onClick={() => {
                      setItemToDisplay(product);
                      window.localStorage.setItem(
                        "product",
                        JSON.stringify(product)
                      );

                      window.scrollTo({
                        top: 0,
                        behavior: "smooth",
                      });
                    }}
                  >
                    <img
                      className="img"
                      src={product.img}
                      alt={product.title || "Product"}
                    />
                  </Link>
                </div>
                <div className="details">
                  <Link
                    key={product.title || index}
                    to="/product"
                    onClick={() => {
                      setItemToDisplay(product);
                      window.localStorage.setItem(
                        "product",
                        JSON.stringify(product)
                      );

                      window.scrollTo({
                        top: 0,
                        behavior: "smooth",
                      });
                    }}
                  >
                    <div className="h3">{product.title}</div>
                    <span className="price">
                      {product.discount ? (
                        <span>
                          <sapn className="oldPrice">{product.price} EGP</sapn>
                          <span className="newPrice">
                            {(
                              product.price -
                              (product.discoutRate / 100) * product.price
                            ).toFixed(0)}{" "}
                            EGP
                          </span>
                        </span>
                      ) : (
                        <span className="newPrice">{product.price} EGP</span>
                      )}
                    </span>
                  </Link>
                  <button
                    className="btn"
                    onClick={() => {
                      window.scrollTo({
                        top: 0,
                        behavior: "smooth",
                      });
                      const newCartItems = [...cartItems];
                      const itemExists = newCartItems.some(
                        (item) => item.title === product.title
                      );

                      if (!itemExists) {
                        newCartItems.push({ ...product, quantity: 1 });
                        window.localStorage.setItem(
                          "cartItems",
                          JSON.stringify(newCartItems)
                        );
                        setCartItems(newCartItems);
                        setItemAddedToCart("done");
                      } else {
                        setItemAddedToCart("not");
                      }
                      // console.log(cartItems);
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
