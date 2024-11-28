import { Link, useNavigate } from "react-router-dom";
import "../css/wishlist.css";
import { Alert, Breadcrumb, List, Typography } from "antd";
import { CheckOutlined, HeartOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
export default function Wishlist({
  wishlist,
  setWishlist,
  cartItems,
  itemAddedToCart,
  setItemAddedToCart,
  setCartItems,
  setNavigate,
  setItemToDisplay,
}) {
  const navigate = useNavigate();
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
      {wishlist.length === 0 && (
        <div className="noItems">
          <div className="icon">
            <HeartOutlined />
          </div>
          <div className="info">This wishlist is empty.</div>
          <div className="data">
            You don't have any products in the wishlist yet. You will find a lot
            of interesting products on our "Shop" page.
          </div>
          <button
            onClick={() => {
              navigate("/");
            }}
            className="btn"
          >
            return to shop
          </button>
        </div>
      )}
      {wishlist.length > 0 && (
        <div className="Content">
          <List
            pagination={{
              defaultCurrent: 1,
              pageSize: 10,
              align: "center",
              total: wishlist.length,
            }}
            className="allItems"
            grid={{
              gutter: 10,
              xs: 2,
              sm: 3,
              md: 3,
              lg: 4,
              xl: 5,
              xxl: 5,
            }}
            dataSource={wishlist}
            renderItem={(product) => {
              var exist = [];
              return (
                <>
                  <div className="remove">
                    <span
                      style={{ fontSize: 25, cursor: "pointer" }}
                      onClick={() => {
                        const newWishlist = [...wishlist];
                        newWishlist.splice(
                          newWishlist.findIndex(
                            (item) => item.title === product.title
                          ),
                          1
                        );
                        window.localStorage.setItem(
                          "wishlistItems",
                          JSON.stringify(newWishlist)
                        );
                        setWishlist(newWishlist);
                      }}
                    >
                      X
                    </span>
                  </div>
                  <Link>
                    <div className="card">
                      <div className="cover">
                        <div className="pag">
                          {product.discount && (
                            <span className="badge">
                              -{product.discoutRate}%
                            </span>
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
                          key={product.title}
                          to={"/product"}
                          onClick={() => {
                            setItemToDisplay(product);
                            // setNavigate(nav);
                            const item = JSON.stringify(product);
                            window.localStorage.setItem("product", item);
                            // console.log(item);
                            // console.log(window.localStorage.getItem("product"));
                          }}
                        >
                          <img
                            className="img"
                            src={product.img}
                            alt={product.title}
                          />
                        </Link>
                      </div>
                      <div className="details">
                        <Link
                          key={product.title}
                          to={"/product"}
                          onClick={() => {
                            setItemToDisplay(product);
                            // setNavigate(nav);
                            const item = JSON.stringify(product);
                            window.localStorage.setItem("product", item);
                          }}
                        >
                          <div className="h3">{product.title}</div>
                          <span className="price">
                            {product.discount ? (
                              <span>
                                <sapn className="oldPrice">
                                  {product.price} EGP
                                </sapn>
                                <span className="newPrice">
                                  {(
                                    product.price -
                                    (product.discoutRate / 100) * product.price
                                  ).toFixed(0)}{" "}
                                  EGP
                                </span>
                              </span>
                            ) : (
                              <span className="newPrice">
                                {product.price} EGP
                              </span>
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
                </>
              );
            }}
          />
        </div>
      )}
    </div>
  );
}
