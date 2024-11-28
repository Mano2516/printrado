import { Breadcrumb, Typography } from "antd";
import "../css/about.css";
import { useNavigate } from "react-router-dom";
export default function About({ setNavigate }) {
  const navigate = useNavigate();
  return (
    <div className="MainContainer">
      <div className="title">
        <div className="ele">
          <Typography.Title className="heading"> About us</Typography.Title>
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
              { name: "About us", title: "About us" },
            ]}
          />
        </div>
      </div>
      <div className="about-us">
        <Typography.Paragraph>
          At PRINTRADO Bookstore, we believe that books are the main resource
          for effective learning.
        </Typography.Paragraph>
        <Typography.Paragraph>
          Our aim is to provide technology and business books for affordable
          prices.
        </Typography.Paragraph>
        <Typography.Paragraph>
          The business is owned and managed by experts in the software and
          business fields.
        </Typography.Paragraph>
      </div>
    </div>
  );
}
