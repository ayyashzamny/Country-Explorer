// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CountryExplorer from "./pages/CountryExplorer";
import MapPage from "./pages/MapPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CountryExplorer />} />
        <Route path="/map" element={<MapPage />} />
      </Routes>
    </Router>
  );
}

export default App;
