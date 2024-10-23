import {
  FilterOutlined,
  HeartOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import "../css/nav.css";
import { Badge } from "antd";
export default function Nav() {
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
        <div className="part">
          <UserOutlined />
          <div className="txt">My Account</div>
        </div>
      </div>
    </div>
  );
}
