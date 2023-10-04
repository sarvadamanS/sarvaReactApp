import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactApp from "./ContactApp.js";
import Dashboard from "./Dashboard.js";
import About from "./About.js";
import { store } from "./store";
import { Provider } from "react-redux";
console.log(BrowserRouter);
const App = () => {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<ContactApp />} />
        <Route path="contacts" element={<ContactApp />} />
        <Route path="maps" element={<Dashboard />} />
        <Route path="graphs" element={<Dashboard />} />
        <Route path="about" element={<About />} />
      </Routes>
    </Provider>
  );
};
export default App;
