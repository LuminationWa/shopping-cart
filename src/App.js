import React, { useState } from "react";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import Shop from "./Components/Shop";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/shop"
            element={<Shop />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
