import {
  HeartOutlined,
  MenuOutlined,
  PhoneOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import "../css/header.css";
import logo from "../imgs/logo.webp";
import { Badge, Image, Input } from "antd";
import Link from "antd/es/typography/Link";
export default function Header() {
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
          <Link href="#" className="link">
            Home
          </Link>
          <Link href="#" className="link">
            Software Engineering
          </Link>
          <Link href="#" className="link">
            Data Science
          </Link>
          <Link href="#" className="link">
            Technology
          </Link>
          <Link href="#" className="link">
            Cybersecurity
          </Link>
          <Link href="#" className="link">
            Management
          </Link>
          <Link href="#" className="link">
            Self-Help
          </Link>
          <Link href="#" className="link">
            About us
          </Link>
          <Link href="#" className="link">
            Contact us
          </Link>
        </div>
      </div>
      <div className="smallContainer">
        <div className="small">
          <div className="drawer">
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
    </div>
  );
}
