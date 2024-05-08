import "./App.css";
import Home from "./components/Home/Home";
import ContactUs from "./components/ContactUs/ContactUs";
import AboutUs from "./components/AboutUs/AboutUs";
import Movies from "./components/Movies/Movies";
import MoviesDetail from "./components/MoviesDetail/MoviesDetail";

import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";
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

  
  // đọc thông tin user từ localStorage
  const getUserInfoFromLocalStorage = () => {
    const userInfo = localStorage.getItem("user");
    if (userInfo) {
      return JSON.parse(userInfo);
    }
    return null;
  };

  const saveUserInfoToLocalStorage = (userInfo) => {
    if (!userInfo) {
      localStorage.removeItem("user");
      setUser(null);
    } else {
      localStorage.setItem("user", JSON.stringify(userInfo));
      setUser(userInfo);
    }
  };
  // state user
  const [user, setUser] = useState(getUserInfoFromLocalStorage());

 
  return (
    <div className="container">
      <Router id="router">
        <Routes id="routes">
            <Route
              path="/login"
              element={<Login saveUser={saveUserInfoToLocalStorage} />}
            />
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/moviesDetail" element={<MoviesDetail />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/pass" element={<ChangePass />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/addmovies" element={<AddMovies />} />
          <Route path="/movieslist" element={<MoviesList />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
