import React from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./Layout";
import Homework01 from './pages/Homework01';
import Homework02 from './pages/Homework02';
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <Routes>
        <Route to="/" element={<Layout />}>
          <Route path="/" element={<Homework01 />}/>
          <Route path="/homework02" element={<Homework02 />}/>
          <Route path="/dashboard" element={<Dashboard />}/>
        </Route>
    </Routes>
  );
}

export default App;
