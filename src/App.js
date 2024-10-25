import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
// import Nav from "./components/Nav";
import Footer from "./components/Footer";
import PageContent from "./components/PageContent";

function App() {
  const [navigate, setNavigate] = useState("");
  return (
    <div style={{ minHeight: "100vh" }}>
      <Header navigate={navigate} setNavigate={setNavigate} />
      <PageContent navigate={navigate} setNavigate={setNavigate} />
      <Footer navigate={navigate} setNavigate={setNavigate} />
    </div>
  );
}

export default App;
