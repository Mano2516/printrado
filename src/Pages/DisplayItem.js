import { Breadcrumb, Collapse, Divider, List } from "antd";
import "../css/displayItemPage.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { HeartOutlined } from "@ant-design/icons";
export default function DisplayItem({
  itemToDisplay,
  setNavigate,
  setItemToDisplay,
  setPageItems,
  pageItems,
}) {
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
        <RelatedBooks
          pageItems={pageItems}
          setPageItems={setPageItems}
          setItemToDisplay={setItemToDisplay}
          setNavigate={setNavigate}
        />
      </div>
    </div>
  );
}

function RelatedBooks({
  pageItems,
  setNavigate,
  setItemToDisplay,
  setPageItems,
}) {
  if (!pageItems || pageItems.length === 0) {
    return <div className="itemsContainer">No related books available.</div>;
  }
  pageItems.length = 5;

  // console.log(pageItems);
  // console.log(pageItems);
  return (
    <div className="ItemsContainer">
      {pageItems.map((product, index) => {
        return (
          <div className="allItems">
            <Link
              key={product.title || index} // Fallback to `index` if `title` is missing
              to="/product"
              onClick={() => {
                setItemToDisplay(product); // Pass a single product
                window.localStorage.setItem("product", JSON.stringify(product));
                // window.location.reload();
                window.scrollTo({
                  top: 0,
                  behavior: "smooth", // Smooth scrolling
                });
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
                    alt={product.title || "Product"}
                  />
                </div>
                <div className="details">
                  <div className="h3">{product.title || "Untitled"}</div>
                  <span className="price">
                    {product.discount ? (
                      <span>
                        <span className="oldPrice">{product.price} EGP</span>
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
          </div>
        );
      })}
    </div>
  );
  // if (!pageItems || pageItems.length === 0) {
  //   return <div className="itemsContainer">No related books available.</div>;
  // }
  // pageItems.length = 5;
  // return (
  //   <div className="itemsContainer">
  //     <List
  //       className="allItems"
  //       grid={{
  //         gutter: 10,
  //         xs: 2,
  //         sm: 3,
  //         md: 3,
  //         lg: 4,
  //         xl: 5,
  //         xxl: 5,
  //       }}
  //       dataSource={pageItems.filter(Boolean)} // Remove any `null` or `undefined` items
  //       renderItem={(product, index) => {
  //         if (!product || !product.title) {
  //           console.warn("Invalid product:", product);
  //           return null; // Skip invalid entries
  //         }
  //         return (
  //           <Link
  //             key={product.title || index} // Fallback to `index` if `title` is missing
  //             to="/product"
  //             onClick={() => {
  //               setItemToDisplay(product); // Pass a single product
  //               window.localStorage.setItem("product", JSON.stringify(product));
  //               window.location.reload();
  //             }}
  //           >
  //             <div className="card">
  //               <div className="cover">
  //                 <div className="pag">
  //                   {product.discount && (
  //                     <span className="badge">-{product.discoutRate}%</span>
  //                   )}
  //                   <span className="fav">
  //                     <HeartOutlined />
  //                   </span>
  //                 </div>
  //                 <img
  //                   className="img"
  //                   src={product.img}
  //                   alt={product.title || "Product"}
  //                 />
  //               </div>
  //               <div className="details">
  //                 <div className="h3">{product.title || "Untitled"}</div>
  //                 <span className="price">
  //                   {product.discount ? (
  //                     <span>
  //                       <span className="oldPrice">{product.price} EGP</span>
  //                       <span className="newPrice">
  //                         {(
  //                           product.price -
  //                           (product.discoutRate / 100) * product.price
  //                         ).toFixed(0)}{" "}
  //                         EGP
  //                       </span>
  //                     </span>
  //                   ) : (
  //                     <span className="newPrice">{product.price} EGP</span>
  //                   )}
  //                 </span>
  //                 <button className="btn">Add to Cart</button>
  //               </div>
  //             </div>
  //           </Link>
  //         );
  //       }}
  //     />
  //   </div>
  // );
}
