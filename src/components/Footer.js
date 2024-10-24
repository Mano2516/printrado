import { Image } from "antd";
import logo from "../imgs/logo.webp";
import Link from "antd/es/typography/Link";
import "../css/footer.css";
import {
  FacebookFilled,
  InstagramFilled,
  LinkedinOutlined,
  SendOutlined,
  TikTokFilled,
  TwitterOutlined,
  WhatsAppOutlined,
  XFilled,
  YoutubeFilled,
} from "@ant-design/icons";
export default function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="logo">
            <Image
              src={logo}
              alt="Logo"
              preview={false}
              style={{ width: 235 }}
            />
          </div>
          <div className="links">
            <div>
              <Link href="#" className="link">
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
              <Link href="#" className="link">
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
