import { HeartOutlined } from "@ant-design/icons";
import { List } from "antd";
import { useEffect, useState } from "react";
import "../css/items.css";
import { Link } from "react-router-dom";
import { HomePageElements, SoftwareBooks } from "../pagesContent/HomePageEle";

// const HomePageElements = [
//   {
//     title: "Grokking Algorithms",
//     price: 339,
//     discount: true,
//     discoutRate: 56,
//     img: "https://printrado-media.s3.eu-central-1.amazonaws.com/wp-content/uploads/2024/02/12215955/Grokking-Algorithms-205x275.jpg.webp",
//   },
//   {
//     title: "Cracking the Coding Interview",
//     price: 449,
//     discount: false,
//     img: "https://printrado-media.s3.eu-central-1.amazonaws.com/wp-content/uploads/2021/02/12234658/Cracking-the-Coding-Interview-205x293.jpg.webp",
//   },
//   {
//     title: "The Pragmatic ",
//     price: 299,
//     discount: false,
//     img: "https://printrado-media.s3.eu-central-1.amazonaws.com/wp-content/uploads/2021/02/12234658/Cracking-the-Coding-Interview-205x293.jpg.webp",
//   },
//   {
//     title: "Clean Code",
//     price: 339,
//     discount: true,
//     discoutRate: 56,
//     img: "https://printrado-media.s3.eu-central-1.amazonaws.com/wp-content/uploads/2021/02/12234821/Clean-Code-205x271.jpg.webp",
//   },
//   {
//     title: "The Clean Coder",
//     price: 399,
//     discount: false,
//     img: "https://printrado-media.s3.eu-central-1.amazonaws.com/wp-content/uploads/2021/02/12234658/Cracking-the-Coding-Interview-205x293.jpg.webp",
//   },
// ];
export default function Items({ elements, setElements }) {
  const [items, setItems] = useState(HomePageElements);
  useEffect(() => {
    elements === "home" && setItems(HomePageElements);
    elements === "soft" && setItems(SoftwareBooks);
  });

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
              <Link>
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
