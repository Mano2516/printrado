import { Route, Routes } from "react-router-dom";
import Login from "../Pages/Login";
import Items from "../Pages/Items";
import About from "../Pages/About";

export default function AppRoutes({ navigate, setNavigate }) {
  return (
    <Routes>
      <Route
        path="/"
        element={<Items navigate={navigate} setNavigate={setNavigate} />}
      />
      <Route
        path="/login"
        element={<Login navigate={navigate} setNavigate={setNavigate} />}
      />
      <Route
        path="/about"
        element={<About navigate={navigate} setNavigate={setNavigate} />}
      />
    </Routes>
  );
}
