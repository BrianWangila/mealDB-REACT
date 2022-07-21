import React from "react";
import Navbar from "../Navbar/Navbar";
import Search from "../Search/Search";
import Home from "../Home/Home";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App(){
  return(
    <Router>
      <div>
        <Navbar/>
        <Home />
        <Search />
      </div>

      <Routes>
        <Route path="/" element={Home}>{<Home/>}</Route>
        <Route path="/" element={Search}>{<Search/>}</Route>
        <Route path="/" element={Navbar}>{<Navbar/>}</Route>

      </Routes>

    </Router>
    
  )
}

export default App