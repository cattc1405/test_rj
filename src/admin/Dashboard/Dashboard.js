import React, { useState, useEffect } from "react";
import "./Dashboard.css";
import CustomHeader from "../../multiComponents/CustomHeader/CustomHeader";
import MenuAd from "../MenuAdmin/MenuAd";

export default function Dashboard() {
  const [isRightMainActive, setIsRightMainActive] = useState(false);

  useEffect(() => {
    setIsRightMainActive(true);
  }, []);

  return (
    <div id="dashboardContainer">
      <div id="dashboardContent">
        <CustomHeader />
        <div id="dashboardMain">
          <MenuAd />
          <div id="rightMainDb" className={isRightMainActive ? "active" : ""}>
            <h1>Dashboard</h1>
            <div id="totalView">
              <div className="totalItem">
                <div>
                  <div id="totalMovies">
                    <img
                      src={require("./../../assets/icons/moviesIcc.png")}
                      alt=""
                    />
                  </div>
                </div>
                <div className="totalContent">
                  <p>Total Movies</p>
                  <h3>11</h3>
                </div>
              </div>
              <div className="totalItem">
                <div>
                  <div id="totalCate">
                    <img
                      src={require("./../../assets/icons/cateIcc.png")}
                      alt=""
                    />
                  </div>
                </div>
                <div className="totalContent">
                  <p>Total Categories</p>
                  <h3>11</h3>
                </div>
              </div>
              <div className="totalItem">
                <div>
                  <div id="totalUsers">
                    <img
                      src={require("./../../assets/icons/usericon.png")}
                      alt=""
                    />
                  </div>
                </div>{" "}
                <div className="totalContent">
                  <p>Total Users</p>
                  <h3>11</h3>
                </div>
              </div>
            </div>

            <p>Recent Movies</p>

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
                    <img
                      src={require("./../../assets/images/film2.png")}
                      alt=""
                    />
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

              <tr>
                <td className="tdImage">
                  <div>
                    <img
                      src={require("./../../assets/images/film2.png")}
                      alt=""
                    />
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
        </div>
      </div>
    </div>
  );
}
