import { Route, Routes } from "react-router-dom";
import Login from "../Pages/Login";
import Items from "../Pages/Items";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import DisplayItem from "../Pages/DisplayItem";
import { useState } from "react";

export default function AppRoutes({
  navigate,
  setNavigate,
  elements,
  setElements,
  setItemToDisplay,
  itemToDisplay,
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
            setItemToDisplay={setItemToDisplay}
            itemToDisplay={itemToDisplay}
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
      <Route
        path="/contact"
        element={
          <Contact setNavigate={setNavigate} itemToDisplay={itemToDisplay} />
        }
      />
      <Route
        path="/product"
        element={
          <DisplayItem
            setItemToDisplay={setItemToDisplay}
            itemToDisplay={itemToDisplay}
            navigate={navigate}
            setNavigate={setNavigate}
          />
        }
      />
    </Routes>
  );
}
