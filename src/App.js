import React from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./Layout";
import Homework01 from './pages/Homework01/Homework01';
import Homework02 from './pages/Homework01/Homework01';

const App = () => {
  return (
    <Routes>
        <Route to="/" element={<Layout />}>
          <Route path="/homework01" element={<Homework01 />}/>
          <Route path="/homework02" element={<Homework02 />}/>
        </Route>
    </Routes>
  );
}

export default App;
