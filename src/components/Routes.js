import { Route, Routes } from "react-router-dom";
import Login from "../Pages/Login";
import Items from "../Pages/Items";
import About from "../Pages/About";
import Contact from "../Pages/Contact";

export default function AppRoutes({
  navigate,
  setNavigate,
  elements,
  setElements,
}) {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Items
            navigate={navigate}
            setNavigate={setNavigate}
            elements={elements}
            setElements={setElements}
          />
        }
      />
      <Route
        path="/login"
        element={<Login navigate={navigate} setNavigate={setNavigate} />}
      />
      <Route
        path="/about"
        element={<About navigate={navigate} setNavigate={setNavigate} />}
      />
      <Route path="/contact" element={<Contact setNavigate={setNavigate} />} />
    </Routes>
  );
}
