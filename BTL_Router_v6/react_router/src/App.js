import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./pages/Header";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import EmployeeDetail from "./pages/EmployeeDetail";
import Dashboard from './pages/Dashboard/Dashboard';
import Analytics from './pages/Dashboard/Analytics';
import Reports from './pages/Dashboard/Reports';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/employee/:id" element={<EmployeeDetail />} />

        {/* Route cha */}
        <Route path="/dashboard" element={<Dashboard />}>
          {/* Nested Routes */}
          <Route path="analytics" element={<Analytics />} />
          <Route path="reports" element={<Reports />} />
        </Route>

      </Routes>
    </Router>
  );
}

export default App;
