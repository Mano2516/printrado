import { CheckOutlined, HeartOutlined } from "@ant-design/icons";
import { Alert, List } from "antd";
import { useEffect, useState } from "react";
import "../css/items.css";
import { Link } from "react-router-dom";

export default function Items({
  elements,
  setElements,
  setNavigate,
  setItemToDisplay,
  itemToDisplay,
  it,
  nav,
  cartItems,
  setCartItems,
  setItemAddedToCart,
  setWishlist,
  wishlist,
}) {
  const [items, setItems] = useState(it);

  useEffect(() => {
    try {
      const savedCart = JSON.parse(localStorage.getItem("cartItems")) || [];
      setCartItems(savedCart);
    } catch (error) {
      console.error("Failed to parse cart items from localStorage:", error);
      setCartItems([]);
    }
  }, []);

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

  return (
    <div className="mainContainer">
      <div className="Content">
        <List
          pagination={{
            defaultCurrent: 1,
            pageSize: 10,
            align: "center",
            total: items.length,
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
          dataSource={items}
          renderItem={(product) => {
            var exist = [];
            return (
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
                      key={product.title}
                      to={"/product"}
                      onClick={() => {
                        setItemToDisplay(product);
                        setNavigate(nav);
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
                        setNavigate(nav);
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
                          <span className="newPrice">{product.price} EGP</span>
                        )}
                      </span>
                    </Link>
                    <button
                      className="btn"
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
            );
          }}
        />
      </div>
    </div>
  );
}
