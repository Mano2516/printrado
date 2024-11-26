import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
// import Nav from "./components/Nav";
import Footer from "./components/Footer";
import PageContent from "./components/PageContent";

function App() {
  const [navigate, setNavigate] = useState("");
  const [pageEle, setpageEle] = useState("");
  const [itemToDisplay, setItemToDisplay] = useState([]);
  return (
    <div style={{ minHeight: "100vh" }}>
      <Header
        navigate={navigate}
        setNavigate={setNavigate}
        setElements={setpageEle}
        elements={pageEle}
        setItemToDisplay={setItemToDisplay}
        itemToDisplay={itemToDisplay}
      />
      <PageContent
        navigate={navigate}
        setNavigate={setNavigate}
        setElements={setpageEle}
        elements={pageEle}
        setItemToDisplay={setItemToDisplay}
        itemToDisplay={itemToDisplay}
      />
      <Footer
        navigate={navigate}
        setNavigate={setNavigate}
        setElements={setpageEle}
        elements={pageEle}
      />
    </div>
  );
}

export default App;
