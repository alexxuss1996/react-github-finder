import React from "react";
import "./App.scss";
import MainPage from "./components/MainPage";
import Navbar from "./components/Navbar";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" index element={<MainPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
