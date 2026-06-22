import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Activities from "./pages/Activities";
import Team from "./pages/Team";
import BlogPage from "./pages/BlogPage";
import ActivityPage from "./pages/ActivityPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/team" element={<Team />} />
          <Route path="/blog/:id" element={<BlogPage />} />
          <Route path="/activities/:id" element={<ActivityPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
