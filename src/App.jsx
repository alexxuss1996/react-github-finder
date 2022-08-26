import React from "react";
import "./App.scss";
import MainPage from "./components/MainPage";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
import ProfilePage from "./components/ProfilePage";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<MainPage />} />
          <Route path="/users/:login" element={<ProfilePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
