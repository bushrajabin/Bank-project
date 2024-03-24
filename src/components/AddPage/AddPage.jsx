import React from "react";
import "./AddPage.css";
function AddPage({ setIsAddFormVisible }) {
  const showForm = () => {
    setIsAddFormVisible(true)
  };
  return (
    <div className="main-Div">
      <div className="mycard">
        <h1>My Card</h1>
      </div>
      <div className="addButton">
        <button onClick={showForm}>+</button>
      </div>
    </div>
  );
}

export default AddPage;
