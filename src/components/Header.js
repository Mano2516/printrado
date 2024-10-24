import {
  HeartOutlined,
  MenuOutlined,
  PhoneOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  XFilled,
} from "@ant-design/icons";
import "../css/header.css";
import logo from "../imgs/logo.webp";
import { Badge, Drawer, Image, Input } from "antd";
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
            <button className="login">
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
function LoginDrawer({ open, isOpen }) {}
