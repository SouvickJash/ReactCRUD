import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import MyNavbar from "./MyNavbar";
import Product from "./Product";
import Blog from "./Blog";
import ContextState from "./Context/ContextState";
import PageNotFound from "./PageNotFound";


const MyRoute = () => {
  return (
    <>
    <ContextState>
    <Router>
        <MyNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </ContextState>
    </>
  );
};

export default MyRoute;
