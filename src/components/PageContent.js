import AppRoutes from "./Routes";
// import "../css/mainContent.css";
export default function PageContent({
  setNavigate,
  navigate,
  elements,
  setElements,
  itemToDisplay,
  setItemToDisplay,
  setPageItems,
  pageItems,
  cartItems,
  setCartItems,
}) {
  return (
    <div style={{ maxWidth: "100%" }} className="container">
      <div className="elements">
        <AppRoutes
          navigate={navigate}
          setNavigate={setNavigate}
          elements={elements}
          setElements={setElements}
          itemToDisplay={itemToDisplay}
          setItemToDisplay={setItemToDisplay}
          setPageItems={setPageItems}
          pageItems={pageItems}
          cartItems={cartItems}
          setCartItems={setCartItems}
        />
      </div>
    </div>
  );
}
