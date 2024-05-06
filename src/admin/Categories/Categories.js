import React, { useState, useEffect } from "react";
import "./Categories.css";
import CustomHeader from "../../multiComponents/CustomHeader/CustomHeader";
import MenuAd from "../MenuAdmin/MenuAd";

export default function Categories() {
  const [isRightMainActive, setIsRightMainActive] = useState(false);
  const [isCategoryWindowOpen, setIsCategoryWindowOpen] = useState(false);
  const [categoryWindowPosition, setCategoryWindowPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    setIsRightMainActive(true);
  }, []);

  const handleAddCategoryClick = (event) => {
    const buttonRect = event.target.getBoundingClientRect();
    const positionX = buttonRect.left + buttonRect.width / 2;
    const positionY = buttonRect.top + buttonRect.height + window.scrollY;
    setCategoryWindowPosition({ x: positionX, y: positionY });
    setIsCategoryWindowOpen(true);
  };

  const handleCloseCastWindow = () => {
    setIsCategoryWindowOpen(false);
  };
  return (
    <div id="categoriesContainer">
      <div id="categoriesContent">
        <CustomHeader />
        <div id="categoriesMain">
          <MenuAd />
          <div
            id="rightMainCategories"
            className={isRightMainActive ? "active" : ""}
          >
            <div className="titleDiv">
              <h1>Categories</h1>
              <button id="btnCreateCate" onClick={handleAddCategoryClick}>
                <img
                  src={require("./../../assets/icons/greenPlussIcc.png")}
                  alt=""
                />
                <p>Create</p>
              </button>
            </div>

            <table id="tableCategories">
              <tr>
                <th id="thId">ID</th>
                <th id="thDate">DATE</th>
                <th id="thName">NAME</th>
                <th id="thActions">ACTIONS</th>
              </tr>
              <tr>
                <td className="tdId">637CA086</td>
                <td className="tdDate">November 22, 2022</td>
                <td className="tdName">Action</td>
                <td className="tdActions">
                  <div>
                    <button className="editBtn">
                      <p>Edit</p>
                      <img
                        src={require("./../../assets/icons/greenEditIcccc.png")}
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
                <td className="tdId">637CA086</td>
                <td className="tdDate">November 22, 2022</td>
                <td className="tdName">Action</td>
                <td className="tdActions">
                  <div>
                    <button className="editBtn">
                      <p>Edit</p>
                      <img
                        src={require("./../../assets/icons/greenEditIcccc.png")}
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
                <td className="tdId">637CA086</td>
                <td className="tdDate">November 22, 2022</td>
                <td className="tdName">Action</td>
                <td className="tdActions">
                  <div>
                    <button className="editBtn">
                      <p>Edit</p>
                      <img
                        src={require("./../../assets/icons/greenEditIcccc.png")}
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
      {isCategoryWindowOpen && (
        <CategoryInformationWindow onClose={handleCloseCastWindow} />
      )}
    </div>
  );
}

const handleAddCategory = (categoryName) => {
  const parentElement = document.getElementById("tableCategories");

  const newCastElement = document.createElement("tr");

  newCastElement.innerHTML = `
    <td class="tdId">637CA086</td>
    <td class="tdDate">November 22, 2022</td>
    <td class="tdName">${categoryName}</td>
    <td class="tdActions">
      <div>
        <button class="editBtn">
          <p>Edit</p>
          <img
            src=${require("./../../assets/icons/greenEditIcccc.png")}
            alt=""
          />
        </button>
        <button class="deleteBtn">
          <img
            src=${require("./../../assets/icons/deleteiccccc.png")}
            alt=""
          />
        </button>
      </div>
    </td>
  `;

  parentElement.appendChild(newCastElement);
};

const CategoryInformationWindow = ({ onClose }) => {
  const [categoryName, setCategoryName] = useState("");

  const style = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 9999,
  };
  const handleButtonClick = () => {
    onClose();
    handleAddCategory(categoryName);
  };

  return (
    <div className="categoryWindow" style={style}>
      <div className="categoryContent">
        <h1>Create Category</h1>
        <p>Category name</p>
        <input
          type="text"
          placeholder="Action"
          onChange={(e) => setCategoryName(e.target.value)}
        />
        <button className="createCategoryBtn" onClick={handleButtonClick}>
          <p>Create</p>
        </button>
      </div>
    </div>
  );
};
