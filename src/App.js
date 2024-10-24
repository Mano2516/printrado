import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  const [navigate, setNavigate] = useState("home");
  return (
    <div style={{ minHeight: "100vh" }}>
      <Header navigate={navigate} setNavigate={setNavigate} />
      {/* <Nav /> */}
      <Footer />
    </div>
  );
}

export default App;
