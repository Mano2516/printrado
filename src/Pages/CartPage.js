import { Progress } from "antd";
import "../css/cart.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Cart({ cartItems, setCartItems }) {
  useEffect(() => {
    try {
      const savedCart = JSON.parse(localStorage.getItem("cartItems")) || [];
      setCartItems(savedCart);
    } catch (error) {
      console.error("Failed to parse cart items from localStorage:", error);
      setCartItems([]); // Default to an empty cart
    }
  }, []);
  const navigate = useNavigate();
  return (
    <div className="mainContainer">
      <div className="content">
        <div className="left">
          <div className="remain">
            {cartItems
              .reduce((acc, curr) => {
                return (
                  acc +
                  (curr.price - (curr.discoutRate / 100) * curr.price).toFixed(
                    0
                  ) *
                    curr.quantity
                );
              }, 0)
              .toFixed(0) < 2200 && (
              <>
                {" "}
                Add{" "}
                <span className="value">
                  {2200 -
                    cartItems
                      .reduce((acc, curr) => {
                        return (
                          acc +
                          (
                            curr.price -
                            (curr.discoutRate / 100) * curr.price
                          ).toFixed(0) *
                            curr.quantity
                        );
                      }, 0)
                      .toFixed(0)}{" "}
                  EGP{" "}
                </span>
                to cart and get free shipping!
              </>
            )}
            {cartItems
              .reduce((acc, curr) => {
                return (
                  acc +
                  (curr.price - (curr.discoutRate / 100) * curr.price).toFixed(
                    0
                  ) *
                    curr.quantity
                );
              }, 0)
              .toFixed(0) >= 2200 && (
              <>Your order qualifies for free shipping!</>
            )}

            <Progress
              percent={
                (cartItems
                  .reduce((acc, curr) => {
                    return (
                      acc +
                      (
                        curr.price -
                        (curr.discoutRate / 100) * curr.price
                      ).toFixed(0) *
                        curr.quantity
                    );
                  }, 0)
                  .toFixed(0) /
                  2200) *
                100
              }
              showInfo={false}
              strokeColor={"rgb(237, 156, 75)"}
              status="active"
            />
          </div>
          <div className="ItemsTable">
            <table>
              <thead>
                <tr>
                  <th style={{ textAlign: "center" }}>Product</th>
                  <th style={{ textAlign: "center" }}>Price</th>
                  <th style={{ textAlign: "center" }}>Quantity</th>
                  <th style={{ textAlign: "center" }}>Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item, index) => (
                  <tr
                    key={index}
                    style={{
                      textAlign: "center",
                      marginBottom: 20,
                      borderBottom: "1px solid #ddd",
                    }}
                  >
                    <td>
                      <div className="prod">
                        <span
                          className="removeItem"
                          onClick={() => {
                            const newCartItems = cartItems.filter(
                              (i) => i.title !== item.title
                            );
                            setCartItems(newCartItems);
                            window.localStorage.setItem(
                              "cartItems",
                              JSON.stringify(newCartItems)
                            );
                          }}
                        >
                          X
                        </span>
                        <span className="itemImg">
                          <img src={item.img} alt={item.title}></img>
                        </span>
                        <span className="itemName">{item.title}</span>
                      </div>
                    </td>
                    <td className="price">
                      {(
                        item.price -
                        (item.discoutRate / 100) * item.price
                      ).toFixed(0)}{" "}
                      EGP
                    </td>
                    <td className="quantity">{item.quantity}</td>

                    <td className="total">
                      {(
                        (
                          item.price -
                          (item.discoutRate / 100) * item.price
                        ).toFixed(0) * item.quantity
                      ).toFixed(0)}{" "}
                      EGP
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <SmallScreens cartItems={cartItems} setCartItems={setCartItems} />
          <div className="copun">
            <input type="text" placeholder="Enter your coupon code" />
            <button className="apply">Apply</button>
          </div>
        </div>
        <div className="right">
          <div className="information">
            <div className="secTitle">Cart Totals</div>
            <div className="total">
              <span className="titl">Subtotal :</span>
              <span className="pri">
                {cartItems
                  .reduce((acc, curr) => {
                    return (
                      acc +
                      (
                        curr.price -
                        (curr.discoutRate / 100) * curr.price
                      ).toFixed(0) *
                        curr.quantity
                    );
                  }, 0)
                  .toFixed(0)
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                EGP
              </span>
            </div>
            <div className="shipping">
              <div className="titl">Shipping :</div>
              <div className="places">
                <span>
                  Cairo & Giza Shipping: <span className="val">50 EGP</span>
                </span>
                <span>
                  Shipping to <span className="cairo">Cairo.</span>
                </span>
              </div>
            </div>
            <button
              className="goToCheck"
              onClick={() => {
                // navigate("/checkout", { replace: true });
              }}
            >
              Proceed to checkout
            </button>
          </div>
          <div className="lowInfo">
            <div className="q">
              <div className="t">Delivery information:</div>
              <div className="a">
                <span>We deliver through a shipping company.</span>
                <span>Duration is 2-4 working days</span>
              </div>
            </div>
            <div className="q">
              <div className="t">Quality Guarantee:</div>
              <div className="a">
                <span>We provide full replacement of defective items</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function SmallScreens({ cartItems, setCartItems }) {
  return (
    <div className="small">
      {cartItems.map((item, index) => {
        return (
          <div className="samllItem">
            <div className="sImg">
              <img src={item.img} alt={item.title}></img>
            </div>
            <div className="sDetails">
              <div className="sTitle">
                <span style={{ fontWeight: 700, fontSize: 16 }}>
                  {item.title}
                </span>
                <span
                  className="remove"
                  onClick={() => {
                    const newCartItems = cartItems.filter(
                      (i) => i.title !== item.title
                    );
                    setCartItems(newCartItems);
                    window.localStorage.setItem(
                      "cartItems",
                      JSON.stringify(newCartItems)
                    );
                  }}
                >
                  X
                </span>
              </div>
              <div className="sPrice">
                <span>Price</span>
                <span>
                  {(item.price - (item.discoutRate / 100) * item.price).toFixed(
                    0
                  )}{" "}
                  EGP
                </span>
              </div>
              <div className="sQuantity">
                <span>Quantity</span>
                <span>{item.quantity}</span>
              </div>
              <div className="total">
                <span>Subtotal</span>
                <span className="val">
                  {(
                    (
                      item.price -
                      (item.discoutRate / 100) * item.price
                    ).toFixed(0) * item.quantity
                  ).toFixed(0)}{" "}
                  EGP
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
