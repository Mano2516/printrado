import {
  FacebookFilled,
  FacebookOutlined,
  FilterOutlined,
  GoogleOutlined,
  HeartOutlined,
  MenuOutlined,
  PhoneOutlined,
  SearchOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
  TwitterOutlined,
  UserOutlined,
  XFilled,
} from "@ant-design/icons";

import "../css/nav.css";
import "../css/header.css";
import logo from "../imgs/logo.webp";
import {
  Badge,
  Button,
  Checkbox,
  Divider,
  Drawer,
  Form,
  Image,
  Input,
  Progress,
  Space,
} from "antd";
// import Link from "antd/es/typography/Link";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
export default function Header({
  navigate,
  setNavigate,
  setElements,
  elements,
  cartItems,
  setCartItems,
}) {
  const [toogleDrawer, setToogleDrawer] = useState(false);
  const [loginDrawer, setLoginDrawer] = useState(false);
  const [cartDrawer, setCartDrawer] = useState(false);

  useEffect(() => {
    try {
      const savedCart = JSON.parse(localStorage.getItem("cartItems")) || [];
      setCartItems(savedCart);
    } catch (error) {
      console.error("Failed to parse cart items from localStorage:", error);
      setCartItems([]); // Default to an empty cart
    }
  }, []);
  // console.log(cartItems);
  return (
    <div className="header">
      <div className="container">
        <div className="banner">
          <div className="txt">
            The 1st Technology & Business bookstore in Egypt
          </div>
          <div className="contact">
            <div className="phone">
              <PhoneOutlined />
              <a href="tel:+20 123 456 7890">+20 123 456 7890</a>
            </div>
            <div className="pip">|</div>
            <button
              className="shipping"
              onClick={() => {
                setCartDrawer(true);
              }}
            >
              Free shipping for all orders of EGP 2,000
            </button>
          </div>
        </div>
      </div>
      <div className="navContainer">
        <div className="nav">
          <div
            className="logo"
            onClick={() => {
              setNavigate("home");
              setElements("home");
              console.log(elements);
            }}
          >
            <Link to="/">
              <Image
                src={logo}
                preview={false}
                style={{ height: 100, width: 180 }}
              />
            </Link>
          </div>
          <div className="search">
            <Input
              className="inField"
              prefix={<SearchOutlined />}
              placeholder="Search For Products"
            />
          </div>
          <div className="icons">
            <div className="loved">
              <HeartOutlined />
            </div>
            <button
              className="login"
              onClick={() => {
                setLoginDrawer(true);
              }}
            >
              <UserOutlined />
              Login / Register
            </button>
            <Badge
              count={0 || cartItems.length}
              style={{
                marginLeft: 10,
                color: "rgb(237, 156, 75)",
                backgroundColor: "#fff",
              }}
            >
              <button
                className="cart"
                onClick={() => {
                  setCartDrawer(true);
                }}
              >
                <ShoppingCartOutlined />
                <span className="value">
                  {" "}
                  {cartItems
                    .reduce((acc, curr) => {
                      return (
                        acc +
                        (
                          curr.price -
                          (curr.discoutRate / 100) * curr.price
                        ).toFixed(0) *
                          curr.quantity
                      );
                    }, 0)
                    .toFixed(0)}{" "}
                </span>
                <span className="currency">EGP</span>
              </button>
            </Badge>
          </div>
        </div>
        <div className="categories">
          <Link
            to={"/"}
            className={navigate === "home" && "link active"}
            onClick={() => {
              setNavigate("home");
              setElements("home");
            }}
          >
            Home
          </Link>
          <Link
            to={"/soft"}
            className={navigate === "soft" && "link active"}
            onClick={() => {
              setNavigate("soft");
              setElements("soft");
            }}
          >
            Software Engineering
          </Link>
          <Link
            to="/data"
            className={navigate === "data" && "link active"}
            onClick={() => {
              setNavigate("data");
              setElements("data");
            }}
          >
            Data Science
          </Link>
          <Link
            to="/tech"
            className={navigate === "tech" && "link active"}
            onClick={() => {
              setNavigate("tech");
              setElements("tech");
            }}
          >
            Technology
          </Link>
          <Link
            to="/cyber"
            className={navigate === "cyber" && "link active"}
            onClick={() => {
              setNavigate("cyber");
              setElements("cyber");
            }}
          >
            Cybersecurity
          </Link>
          <Link
            to="/management"
            className={navigate === "management" && "link active"}
            onClick={() => {
              setNavigate("management");
              setElements("management");
            }}
          >
            Management
          </Link>
          <Link
            to="/self"
            className={navigate === "self" && "link active"}
            onClick={() => {
              setNavigate("self");
              setElements("self");
            }}
          >
            Self-Help
          </Link>
          <Link
            to={"/about"}
            className={navigate === "about" && "link active"}
            onClick={() => {
              setNavigate("about");
            }}
          >
            About us
          </Link>
          <Link
            to={"/contact"}
            className={navigate === "contact" && "link active"}
            onClick={() => {
              setNavigate("contact");
            }}
          >
            Contact us
          </Link>
        </div>
      </div>
      <div className="smallContainer">
        <div className="small">
          <div
            className="drawer"
            onClick={() => {
              setToogleDrawer(true);
            }}
          >
            <MenuOutlined />
          </div>
          <div className="logo">
            <Link to="/">
              <Image
                src={logo}
                preview={false}
                style={{ height: 50, width: 80 }}
              />
            </Link>
          </div>
          <Badge
            className="cart"
            count={cartItems.length}
            style={{
              color: "#fff",
              backgroundColor: "rgb(237, 156, 75)",
            }}
          >
            <ShoppingCartOutlined
              className="c"
              onClick={() => {
                setCartDrawer(true);
              }}
            />
          </Badge>
        </div>
        <div className="smallSearch">
          <Input
            className="smallInField"
            prefix={<SearchOutlined />}
            placeholder="Search For Products"
          />
        </div>
      </div>
      <ToggleDrawer
        openToogle={toogleDrawer}
        setISOpen={setToogleDrawer}
        navigate={navigate}
        setNavigate={setNavigate}
        setElements={setElements}
      />
      <LoginDrawer
        open={loginDrawer}
        isOpen={setLoginDrawer}
        setNavigate={setNavigate}
      />
      <Nav
        openLogin={loginDrawer}
        setOpenLogin={setLoginDrawer}
        setNavigate={setNavigate}
        setCart={setCartDrawer}
      />
      <Cart
        openCart={cartDrawer}
        setIsOpen={setCartDrawer}
        cartItems={cartItems}
        setCartItems={setCartItems}
      />
    </div>
  );
}

function ToggleDrawer({
  openToogle,
  setISOpen,
  navigate,
  setNavigate,
  setElements,
}) {
  return (
    <div>
      <Drawer
        className="drawer"
        open={openToogle}
        placement="left"
        style={{ width: 300 }}
        // closable={true}
        closeIcon={null}
        // onMouseLeave={() => {
        //   setISOpen(false);
        // }}
        onClose={() => {
          setISOpen(false);
        }}
      >
        <div className="categories">
          <Link
            to="/"
            className={navigate === "home" && "link active"}
            onClick={() => {
              setNavigate("home");
              setISOpen(false);
              setElements("home");
            }}
          >
            Home
          </Link>
          <Link
            to={"/soft"}
            className={navigate === "soft" && "link active"}
            onClick={() => {
              setNavigate("soft");
              setElements("soft");
              setISOpen(false);
            }}
          >
            Software Engineering
          </Link>
          <Link
            to="/data"
            className={navigate === "data" && "link active"}
            onClick={() => {
              setNavigate("data");
              setElements("data");
              setISOpen(false);
            }}
          >
            Data Science
          </Link>
          <Link
            to="/tech"
            className={navigate === "tech" && "link active"}
            onClick={() => {
              setNavigate("tech");
              setElements("tech");
              setISOpen(false);
            }}
          >
            Technology
          </Link>
          <Link
            to="/cyber"
            className={navigate === "cyber" && "link active"}
            onClick={() => {
              setNavigate("cyber");
              setElements("cyber");
              setISOpen(false);
            }}
          >
            Cybersecurity
          </Link>
          <Link
            to="/management"
            className={navigate === "management" && "link active"}
            onClick={() => {
              setNavigate("management");
              setElements("management");
              setISOpen(false);
            }}
          >
            Management
          </Link>
          <Link
            to="/management"
            className={navigate === "self" && "link active"}
            onClick={() => {
              setNavigate("self");
              setElements("self");
              setISOpen(false);
            }}
          >
            Self-Help
          </Link>
          <Link
            to="/about"
            className={navigate === "about" && "link active"}
            onClick={() => {
              setNavigate("about");
              setISOpen(false);
            }}
          >
            About us
          </Link>
          <Link
            to="/contact"
            className={navigate === "contact" && "link active"}
            onClick={() => {
              setNavigate("contact");
              setISOpen(false);
            }}
          >
            Contact us
          </Link>
        </div>
      </Drawer>
      {/* </div> */}
    </div>
  );
}
function LoginDrawer({ open, isOpen, setNavigate }) {
  return (
    <div>
      <Drawer
        placement="right"
        style={{
          padding: "0 20px",
        }}
        className="loginDrawer"
        open={open}
        closable
        onClose={() => {
          isOpen(false);
        }}
        extra={<div style={{ fontSize: 24, fontWeight: 600 }}>Sign In</div>}
      >
        <Form layout="vertical" className="form">
          <Form.Item
            label={"Username or email address "}
            name={"username"}
            rules={[
              {
                required: true,
                message: "Please input your username or email!",
              },
            ]}
          >
            <Input className="field" />
          </Form.Item>
          <Form.Item
            label={"Password"}
            name={"password"}
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password className="field"></Input.Password>
          </Form.Item>
          <button className="inBtn">Log in</button>
        </Form>
        <div
          className="remember"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 20,
            marginBottom: 20,
            fontFamily: "Work Sans",
          }}
        >
          <Checkbox>Remember me</Checkbox>
          <Link
            className="forgot"
            href="#"
            style={{ color: "rgb(237, 156, 75)" }}
          >
            Lost your password?
          </Link>
        </div>
        <Divider
          style={{ fontSize: 18, fontWeight: 600, textTransform: "uppercase" }}
        >
          Or login with
        </Divider>
        <div className="alter">
          <button className="social face">
            <FacebookFilled className="ico" />
            Facebook
          </button>
          <button className="social google">
            <GoogleOutlined className="ico" />
            Google
          </button>
        </div>
        <Divider />
        <div className="new">
          <div className="icon">
            <UserOutlined className="user" />
            <div className="txt">No account yet ?</div>
          </div>
          <div>
            <Link
              to="./login"
              className="link"
              onClick={() => {
                isOpen(false);
                setNavigate("");
              }}
            >
              Create an Account
            </Link>
          </div>
        </div>
      </Drawer>
    </div>
  );
}

function Nav({ openLogin, setOpenLogin, setCart }) {
  return (
    <div className="navigationContainer">
      <div className="parts">
        <Link to={"/"}>
          <div className="part">
            <ShopOutlined />
            <div className="txt">Shop</div>
          </div>
        </Link>
        {/* <div className="part">
          <FilterOutlined />
          <div className="txt">Filters</div>
        </div> */}
        <div className="part">
          <HeartOutlined />
          <div className="txt">Wishlist</div>
        </div>
        <div
          onClick={() => {
            setCart(true);
          }}
        >
          <Badge
            count={5}
            style={{ color: "white", backgroundColor: "rgb(237, 156, 75)" }}
          >
            <ShoppingCartOutlined
              style={{ fontSize: "25px" }}
              className="part"
            />
          </Badge>
          <div className="txt" style={{ marginLeft: 5 }}>
            Cart
          </div>
        </div>
        <div
          className="part"
          onClick={() => {
            setOpenLogin(true);
          }}
        >
          <UserOutlined />
          <div className="txt">My Account</div>
        </div>
      </div>
    </div>
  );
}

function Cart({ openCart, setIsOpen, cartItems, setCartItems }) {
  const navigate = useNavigate();
  return (
    <div>
      <Drawer
        open={openCart}
        closable
        onClose={() => {
          setIsOpen(false);
        }}
        extra={
          <div style={{ fontSize: 24, fontWeight: 600 }}>Shopping cart</div>
        }
        className="cartDrawer"
      >
        {cartItems.length < 1 && (
          <div className="content">
            <div className="icon">
              <ShoppingCartOutlined />
            </div>
            <div className="txt">Your cart is empty</div>
            <button
              onClick={() => {
                navigate("/");
                setIsOpen(false);
              }}
              className="btn"
            >
              return to shop
            </button>
          </div>
        )}
        {cartItems.length > 0 && (
          <DisplayItemsInCart
            cartItems={cartItems}
            setCartItems={setCartItems}
          />
        )}
      </Drawer>
    </div>
  );
}
function DisplayItemsInCart({ cartItems, setCartItems }) {
  return (
    <div className="all">
      <div className="Elements">
        {cartItems.map((item, index) => {
          return (
            <div className="cartItem">
              <div className="img">
                <img src={item.img} alt={item.title} />
              </div>
              <div className="info">
                <div className="tit">
                  <span>{item.title}</span>
                  <span
                    className="remove"
                    onClick={() => {
                      const newCartItems = cartItems.filter(
                        (i) => i.title !== item.title
                      );
                      setCartItems(newCartItems);
                      window.localStorage.setItem(
                        "cartItems",
                        JSON.stringify(newCartItems)
                      );
                    }}
                  >
                    {" "}
                    X
                  </span>
                </div>
                <div className="price">
                  {item.quantity} X{" "}
                  {item.discount ? (
                    <span>
                      <span className="newPrice">
                        {(
                          item.price -
                          (item.discoutRate / 100) * item.price
                        ).toFixed(0)}{" "}
                        EGP
                      </span>
                    </span>
                  ) : (
                    <span className="newPrice">{item.price} EGP</span>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="lower">
        <div className="total">
          <span className="totalTitle">Subtotal:</span>
          <span className="totalPrice">
            {cartItems
              .reduce((acc, curr) => {
                return (
                  acc +
                  (curr.price - (curr.discoutRate / 100) * curr.price).toFixed(
                    0
                  ) *
                    curr.quantity
                );
              }, 0)
              .toFixed(0)}{" "}
            EGP
          </span>
        </div>
        <div className="btns">
          <div className="remain">
            {cartItems
              .reduce((acc, curr) => {
                return (
                  acc +
                  (curr.price - (curr.discoutRate / 100) * curr.price).toFixed(
                    0
                  ) *
                    curr.quantity
                );
              }, 0)
              .toFixed(0) < 2200 && (
              <>
                {" "}
                Add{" "}
                <span className="value">
                  {2200 -
                    cartItems
                      .reduce((acc, curr) => {
                        return (
                          acc +
                          (
                            curr.price -
                            (curr.discoutRate / 100) * curr.price
                          ).toFixed(0) *
                            curr.quantity
                        );
                      }, 0)
                      .toFixed(0)}{" "}
                  EGP{" "}
                </span>
                to cart and get free shipping!
              </>
            )}
            {cartItems
              .reduce((acc, curr) => {
                return (
                  acc +
                  (curr.price - (curr.discoutRate / 100) * curr.price).toFixed(
                    0
                  ) *
                    curr.quantity
                );
              }, 0)
              .toFixed(0) >= 2200 && (
              <>Your order qualifies for free shipping!</>
            )}

            <Progress
              percent={
                (cartItems
                  .reduce((acc, curr) => {
                    return (
                      acc +
                      (
                        curr.price -
                        (curr.discoutRate / 100) * curr.price
                      ).toFixed(0) *
                        curr.quantity
                    );
                  }, 0)
                  .toFixed(0) /
                  2200) *
                100
              }
              showInfo={false}
              strokeColor={"rgb(237, 156, 75)"}
              status="active"
            />
          </div>
          <div className="actionBtns">
            <button className="view">View cart</button>
            <button className="check">Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
}
