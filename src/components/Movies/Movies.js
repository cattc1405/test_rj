import React from "react";
import CustomHeader from "../../multiComponents/CustomHeader/CustomHeader";
import PopularItem from "../../multiComponents/PopularItem/PopularItem";
import './Movies.css'
export default function Movies() {
  return (
    <div id="moviesContainer">
      <div id="moviesContent">
        <CustomHeader />

        <div id="divMain">
          <div className="selectContainer">
          <select className="selects">
            <option value="0">All Categories</option>
            <option value="1">Action movie</option>
            <option value="2">Martial Arts Movies</option>
            <option value="3">Romance</option>
            <option value="4">Drama</option>
            <option value="5">Comedy</option>
            <option value="6">Cartoon</option>
            <option value="7">Adventure film</option>
            <option value="8">Horror film</option>
            <option value="9">Thriller</option>
            <option value="10">War film</option>
            <option value="11">Science Movie</option>
            <option value="12">Fantasy movie</option>
          </select>

          <select className="selects">
            <option value="0">Country</option>
            <option value="1">America</option>
            <option value="2">Korea</option>
            <option value="3">China</option>
            <option value="4">Hong Kong</option>
            <option value="5">Taiwan</option>
            <option value="6">Vietnam</option>
            <option value="7">Japan</option>
            <option value="8">India</option>
            <option value="9">Thailand</option>
            <option value="10">France</option>
            <option value="10">English</option>
            <option value="11">Other Movies</option>
            
          </select>


          <select className="selects">
            <option value="0">Sort by year</option>
            <option value="1">2024</option>
            <option value="2">2023</option>
            <option value="3">2022</option>
            <option value="4">2021</option>
            <option value="5">2020</option>
            <option value="6">2019</option>
            <option value="7">2018</option>
            <option value="8">2017</option>
            <option value="9">2016</option>
          </select>

          <select className="selects">
            <option value="0">Sort by hours</option>
            <option value="1">2 hours</option>
            <option value="1">2 hours</option>
            <option value="1">2 hours</option>
            <option value="1">2 hours</option>
          </select>

          <select className="selects">
            <option value="0">Sort by stars</option>
            <option value="1">5 stars</option>
            <option value="1">5 stars</option>
            <option value="1">5 stars</option>
            <option value="1">5 stars</option>
            <option value="1">5 stars</option>
            
          </select>
          </div>

          <div className="textT">
            Total ... items Found
          </div>

          <div id="popularContent">
            <PopularItem/>
            <PopularItem/>
            <PopularItem/>
            <PopularItem/>
            <PopularItem/>
            <PopularItem/>
            <PopularItem/>
            <PopularItem/>
          </div>
      </div>
      </div> 
       
    </div>
  );
}
