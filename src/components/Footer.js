import { Image } from "antd";
import logo from "../imgs/logo.webp";

import "../css/footer.css";
import {
  FacebookFilled,
  InstagramFilled,
  LinkedinOutlined,
  SendOutlined,
  TikTokFilled,
  TwitterOutlined,
  WhatsAppOutlined,
  YoutubeFilled,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
export default function Footer({ setNavigate }) {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="logo">
            <Link to="/">
              <Image
                src={logo}
                alt="Logo"
                preview={false}
                style={{ width: 235 }}
              />
            </Link>
          </div>
          <div className="links">
            <div>
              <Link
                to={"/about"}
                className="link"
                onClick={() => {
                  setNavigate("about");
                }}
              >
                About Us
              </Link>
            </div>
            <div>
              <Link href="#" className="link">
                Privacy Policy
              </Link>
            </div>
            <div>
              <Link href="#" className="link">
                Terms & Conditions
              </Link>
            </div>
            <div>
              <Link
                to="/contact"
                className="link"
                onClick={() => {
                  setNavigate("contact");
                }}
              >
                Contact us
              </Link>
            </div>
          </div>
          <div className="social">
            <div>
              <Link href="#" className="link face">
                <FacebookFilled />
              </Link>
            </div>
            <div>
              <Link href="#" className="link x">
                <TwitterOutlined />
              </Link>
            </div>
            <div>
              <Link href="#" className="link insta">
                <InstagramFilled />
              </Link>
            </div>
            <div>
              <Link href="#" className="link youtube">
                <YoutubeFilled />
              </Link>
            </div>
            <div>
              <Link href="#" className="link linkd">
                <LinkedinOutlined />
              </Link>
            </div>
            <div>
              <Link href="#" className="link whats">
                <WhatsAppOutlined />
              </Link>
            </div>
            <div>
              <Link href="#" className="link tik">
                <TikTokFilled />
              </Link>
            </div>
            <div>
              <Link href="#" className="link tele">
                <SendOutlined />
              </Link>
            </div>
          </div>
        </div>
        <div className="txt">
          <div>&copy; 2024 Printrado. All Rights Reserved.</div>
        </div>
      </div>
    </div>
  );
}
