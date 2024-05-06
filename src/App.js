import "./App.css";
import Home from "./components/Home/Home";
import ContactUs from "./components/ContactUs/ContactUs";
import AboutUs from "./components/AboutUs/AboutUs";
import Movies from "./components/Movies/Movies";
import MoviesDetail from "./components/MoviesDetail/MoviesDetail";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Login from "./authen/Login/Login";
import Register from "./authen/Register/Register";
import Profile from "./authen/Profile/Profile";
import Favorites from "./authen/Favorites/Favorites";
import ChangePass from "./authen/ChangePassword/ChangePass";
import Dashboard from "./admin/Dashboard/Dashboard";
import AddMovies from "./admin/AddMovies/AddMovies";
import MoviesList from "./admin/MoviesList/MoviesList";
import Categories from "./admin/Categories/Categories";
import Users from "./admin/Users/Users";

function App() {
  return (
    <div className="container">
      <Router id="router">
        <Routes id="routes">
          {/* <Route> */}
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/moviesDetail" element={<MoviesDetail />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/pass" element={<ChangePass />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/addmovies" element={<AddMovies />} />
            <Route path="/movieslist" element={<MoviesList />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/users" element={<Users />} />
          {/* </Route> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
