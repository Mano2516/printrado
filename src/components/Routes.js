import { Route, Routes } from "react-router-dom";
import Login from "../Pages/Login";
import Items from "../Pages/Items";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Items />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
