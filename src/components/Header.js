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
  Space,
} from "antd";
import Link from "antd/es/typography/Link";
import { useState } from "react";
export default function Header({ navigate, setNavigate }) {
  const [toogleDrawer, setToogleDrawer] = useState(false);
  const [loginDrawer, setLoginDrawer] = useState(false);
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
            <button className="shipping">
              Free shipping for all orders of EGP 2,000
            </button>
          </div>
        </div>
      </div>
      <div className="navContainer">
        <div className="nav">
          <div className="logo">
            <Image
              src={logo}
              preview={false}
              style={{ height: 100, width: 180 }}
            />
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
              count={5}
              style={{
                marginLeft: 10,
                color: "rgb(237, 156, 75)",
                backgroundColor: "#fff",
              }}
            >
              <button className="cart">
                <ShoppingCartOutlined />
                <span className="value"> 200 </span>
                <span className="currency">EGP</span>
              </button>
            </Badge>
          </div>
        </div>
        <div className="categories">
          <Link
            href="#"
            className={navigate === "home" && "link active"}
            onClick={() => {
              setNavigate("home");
            }}
          >
            Home
          </Link>
          <Link
            href="#"
            className={navigate === "soft" && "link active"}
            onClick={() => {
              setNavigate("soft");
            }}
          >
            Software Engineering
          </Link>
          <Link
            href="#"
            className={navigate === "data" && "link active"}
            onClick={() => {
              setNavigate("data");
            }}
          >
            Data Science
          </Link>
          <Link
            href="#"
            className={navigate === "tech" && "link active"}
            onClick={() => {
              setNavigate("tech");
            }}
          >
            Technology
          </Link>
          <Link
            href="#"
            className={navigate === "cyber" && "link active"}
            onClick={() => {
              setNavigate("cyber");
            }}
          >
            Cybersecurity
          </Link>
          <Link
            href="#"
            className={navigate === "management" && "link active"}
            onClick={() => {
              setNavigate("management");
            }}
          >
            Management
          </Link>
          <Link
            href="#"
            className={navigate === "self" && "link active"}
            onClick={() => {
              setNavigate("self");
            }}
          >
            Self-Help
          </Link>
          <Link
            href="#"
            className={navigate === "about" && "link active"}
            onClick={() => {
              setNavigate("about");
            }}
          >
            About us
          </Link>
          <Link
            href="#"
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
            <Image
              src={logo}
              preview={false}
              style={{ height: 50, width: 80 }}
            />
          </div>
          <Badge
            className="cart"
            count={5}
            style={{
              color: "#fff",
              backgroundColor: "rgb(237, 156, 75)",
            }}
          >
            <ShoppingCartOutlined className="c" />
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
      />
      <LoginDrawer open={loginDrawer} isOpen={setLoginDrawer} />
      <Nav openLogin={loginDrawer} setOpenLogin={setLoginDrawer} />
    </div>
  );
}

function ToggleDrawer({ openToogle, setISOpen, navigate, setNavigate }) {
  return (
    <div>
      <Drawer
        className="drawer"
        open={openToogle}
        placement="left"
        style={{ width: 300 }}
        // closable={true}
        closeIcon={null}
        onMouseLeave={() => {
          setISOpen(false);
        }}
        onClose={() => {
          setISOpen(false);
        }}
      >
        <div className="categories">
          <Link
            href="#"
            className={navigate === "home" && "link active"}
            onClick={() => {
              setNavigate("home");
            }}
          >
            Home
          </Link>
          <Link
            href="#"
            className={navigate === "soft" && "link active"}
            onClick={() => {
              setNavigate("soft");
            }}
          >
            Software Engineering
          </Link>
          <Link
            href="#"
            className={navigate === "data" && "link active"}
            onClick={() => {
              setNavigate("data");
            }}
          >
            Data Science
          </Link>
          <Link
            href="#"
            className={navigate === "tech" && "link active"}
            onClick={() => {
              setNavigate("tech");
            }}
          >
            Technology
          </Link>
          <Link
            href="#"
            className={navigate === "cyber" && "link active"}
            onClick={() => {
              setNavigate("cyber");
            }}
          >
            Cybersecurity
          </Link>
          <Link
            href="#"
            className={navigate === "management" && "link active"}
            onClick={() => {
              setNavigate("management");
            }}
          >
            Management
          </Link>
          <Link
            href="#"
            className={navigate === "self" && "link active"}
            onClick={() => {
              setNavigate("self");
            }}
          >
            Self-Help
          </Link>
          <Link
            href="#"
            className={navigate === "about" && "link active"}
            onClick={() => {
              setNavigate("about");
            }}
          >
            About us
          </Link>
          <Link
            href="#"
            className={navigate === "contact" && "link active"}
            onClick={() => {
              setNavigate("contact");
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
function LoginDrawer({ open, isOpen }) {
  return (
    <div>
      <Drawer
        style={{ padding: "0 20px" }}
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
            <Link className="link">Create an Account</Link>
          </div>
        </div>
      </Drawer>
    </div>
  );
}

function Nav({ openLogin, setOpenLogin }) {
  return (
    <div className="navigationContainer">
      <div className="parts">
        <div className="part">
          <ShopOutlined />
          <div className="txt">Shop</div>
        </div>
        <div className="part">
          <FilterOutlined />
          <div className="txt">Filters</div>
        </div>
        <div className="part">
          <HeartOutlined />
          <div className="txt">Wishlist</div>
        </div>
        <div>
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
