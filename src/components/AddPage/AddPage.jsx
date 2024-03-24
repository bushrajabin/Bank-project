import React from "react";
import "./AddPage.css";

function AddPage({ setIsAddFormVisible }) {
  const showForm = () => {
    setIsAddFormVisible(true);
  };
  return (
    <div className="main-Div">
      <div className="mycard">
        <h1>My Card</h1>
      </div>
      <div className="addButton">
        <button onClick={showForm}>+</button>
        <div className="top-card">
          <h2>Balance $4013.90</h2>
          <img src="./image.png" alt="" />
          <h2>SBI Bank</h2>
          <h2>5401**** **** 8510</h2>
        </div>
      </div>
    </div>
  );
}

export default AddPage;
