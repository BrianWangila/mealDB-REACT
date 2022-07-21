import React from "react";
import Navbar from "../Navbar/Navbar";
import Search from "../Search/Search";
import Home from "../Home/Home";
import MealDetails from "../Details/MealDetails";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App(){
  return(
    <Router>
      <div>
        <Navbar/>

      </div>

      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/search" element={<Search/>}></Route>
        <Route path="/meal/:mealId" element={<MealDetails/>}></Route>
      </Routes>

    </Router>
    
  )
}

export default App