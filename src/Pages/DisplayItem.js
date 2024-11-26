import { Breadcrumb, Collapse, Divider } from "antd";
import "../css/displayItemPage.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { HeartOutlined } from "@ant-design/icons";
export default function DisplayItem({ itemToDisplay, setNavigate }) {
  const product =
    itemToDisplay || JSON.parse(window.localStorage.getItem("product"));
  // const product = {
  //   title: "Grokking Algorithms",
  //   price: 339,
  //   discount: true,
  //   discoutRate: 56,
  //   img: "https://printrado-media.s3.eu-central-1.amazonaws.com/wp-content/uploads/2024/02/12215955/Grokking-Algorithms-205x275.jpg.webp",
  //   quantity: 1,
  // };
  const navigate = useNavigate();
  const [value, setValue] = useState(1);
  const [choose, setChoose] = useState("des");
  const items = [
    {
      key: "1",
      label: "Description",
      children: <p>{product.title}</p>,
    },
    {
      key: "2",
      label: "Shipping & Delivery",
      children: (
        <p>
          Books are delivered with a shipping company. Delivery duration is 2-4
          working days
        </p>
      ),
    },
  ];
  return (
    <div className="mainContainer">
      <div className="cont">
        {/* <div className="navigation">
          <Breadcrumb
            items={[
              {
                name: "Home",
                title: "Home",
                icon: "home",
                className: "breadcrumb-item",
                onClick: () => {
                  navigate("/");
                  // setNavigate("home");
                  setNavigate("home");
                },
              },
              { name: product.title, title: product.title },
            ]}
          />
        </div> */}
        <div className="DataSection">
          <div className="img">
            <img src={product.img} alt={product.title} />
          </div>
          <div className="info">
            <div className="itemTitle">{product.title}</div>
            <div className="priceContainer">
              {product.discount ? (
                <span>
                  <sapn className="oldPrice">{product.price} EGP</sapn>
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
            </div>
            <div className="actions">
              <span className="changeValue">
                <button
                  className="inc"
                  onClick={() => {
                    if (value > 1) {
                      const newValue = value - 1;
                      setValue(newValue);
                      product.quantity = newValue;
                    }
                  }}
                >
                  -
                </button>
                {/* {console.log(value)} */}
                <span className="value">{value}</span>
                <button
                  className="dec"
                  onClick={() => {
                    const newValue = value + 1;
                    setValue(newValue);
                    product.quantity = newValue;
                  }}
                >
                  +
                </button>
              </span>
              <button className="addToCart">Add to cart</button>
              <button className="buyNow">Buy now</button>
              <div className="favEle">
                <span className="favIcon">
                  <HeartOutlined />
                </span>
                <span className="favText">Add to wishlist</span>
              </div>
            </div>
            <Divider />
            <div className="more">
              <div className="questions">
                <span
                  onClick={() => {
                    setChoose("des");
                  }}
                  className={choose === "des" ? "active" : ""}
                >
                  Description
                </span>
                <span
                  onClick={() => {
                    setChoose("ship");
                  }}
                  className={choose === "ship" ? "active" : ""}
                >
                  Shipping & Delivery
                </span>
              </div>
              <div className="answers">
                {choose === "des" && <span>{product.title}</span>}
                {choose === "ship" && (
                  <span>
                    Books are delivered with a shipping company. Delivery
                    duration is 2-4 working days
                  </span>
                )}
              </div>
            </div>
            <div className="faqs">
              <Collapse
                accordion={true}
                items={items}
                defaultActiveKey={["1"]}
                bordered={false}
                expandIconPosition="end"
                style={{
                  background: "transparent",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
