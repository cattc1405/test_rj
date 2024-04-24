import React, { useState, useEffect } from "react";
import "./Dashboard.css";
import CustomHeader from "../../multiComponents/CustomHeader/CustomHeader";
import MenuAd from "../MenuAdmin/MenuAd";
import TableMovies from "../tableMovies/tableMovies";

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
            <TableMovies id="tableMovies" />
          </div>
        </div>
      </div>
    </div>
  );
}
