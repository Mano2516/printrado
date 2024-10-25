import AppRoutes from "./Routes";
// import "../css/mainContent.css";
export default function PageContent() {
  return (
    <div style={{ maxWidth: "100%" }} className="container">
      <div className="elements">
        <AppRoutes />
      </div>
    </div>
  );
}
