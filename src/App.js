
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Template from "./Template/Template";
import './App.css';
import ViewNews from "./ViewNews/ViewNews";
import CategoryPage from "./New/CategoryPage";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:id" element={<Template />} />
         <Route path="/:id/DetailedNews/:newsId" element={<ViewNews />} />
        <Route path="/:id/category/:category" element={<CategoryPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
