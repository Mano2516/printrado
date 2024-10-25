import AppRoutes from "./Routes";
// import "../css/mainContent.css";
export default function PageContent({ setNavigate, navigate }) {
  return (
    <div style={{ maxWidth: "100%" }} className="container">
      <div className="elements">
        <AppRoutes navigate={navigate} setNavigate={setNavigate} />
      </div>
    </div>
  );
}
