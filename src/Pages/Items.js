import { HeartOutlined } from "@ant-design/icons";
import { List } from "antd";
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
}) {
  const [items, setItems] = useState(it);
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
          // itemLayout="horizontal"
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
            return (
              <Link
                key={product.title}
                to={"/product"}
                onClick={() => {
                  setItemToDisplay(product);
                  setNavigate("product");
                  const item = JSON.stringify(product);
                  window.localStorage.setItem("product", item);
                  // console.log(item);
                  // console.log(window.localStorage.getItem("product"));
                }}
              >
                <div className="card">
                  <div className="cover">
                    <div className="pag">
                      {product.discount && (
                        <span className="badge">-{product.discoutRate}%</span>
                      )}
                      <span className="fav">
                        <HeartOutlined />
                      </span>
                    </div>
                    <img
                      className="img"
                      src={product.img}
                      alt={product.title}
                    />
                  </div>
                  <div className="details">
                    <div className="h3">{product.title}</div>
                    <span className="price">
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
                    </span>
                    <button className="btn">Add to Cart</button>
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
