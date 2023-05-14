import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactApp from "./ContactApp.js";
import Dashboard from "./Dashboard.js";
import About from "./About.js";
console.log(BrowserRouter);
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<ContactApp />} />
      <Route path="contacts" element={<ContactApp />} />
      <Route path="maps" element={<Dashboard />} />
      <Route path="graphs" element={<Dashboard />} />
      <Route path="about" element={<About />} />
    </Routes>
  );
};
export default App;
