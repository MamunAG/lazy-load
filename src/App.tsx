import { Suspense } from "react";
import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import LazyPage from "./pages/lazy-page";

// Lazy-loaded pages
const Home = React.lazy(() => import("./pages/home"));
const About = React.lazy(() => import("./pages/about"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading route...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/lazy-page" element={<LazyPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
