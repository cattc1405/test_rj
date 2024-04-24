import React from "react";
import "./tableMovies.css";

export default function TableMovies() {
  return (
    <div>
      <table>
        <tr>
          <th id="thImage">
            <p>IMAGE</p>
          </th>
          <th id="thName">NAME</th>
          <th id="thCate">CATEGORY</th>
          <th id="thLanguage">LANGUAGE</th>
          <th id="thYear">YEAR</th>
          <th id="thHours">HOURS</th>
          <th id="thActions">ACTIONS</th>
        </tr>
        <tr>
          <td className="tdImage">
            <div>
              <img src={require("./../../assets/images/film2.png")} alt="" />
            </div>
          </td>
          <td className="tdName">Game Of Thrones</td>
          <td className="tdCategories">Action</td>
          <td className="tdLanguage">English</td>
          <td className="tdYear">2011</td>
          <td className="tdHours">6hr</td>
          <td className="tdActions">
            <div>
              <button className="editBtn">
                <p>Edit</p>
                <img
                  src={require("./../../assets/icons/editIccc.png")}
                  alt=""
                />
              </button>
              <button className="deleteBtn">
                <img
                  src={require("./../../assets/icons/deleteiccccc.png")}
                  alt=""
                />
              </button>
            </div>
          </td>
        </tr>
      </table>
    </div>
  );
}
