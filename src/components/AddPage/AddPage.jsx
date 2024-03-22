import React from "react";
import "./AddPage.css";
function AddPage({ onShowAddForm }) {
  const showForm = () => {
    onShowAddForm(true);
  };
  return (
    <div>
      <div className="mycard">
        <h1>My Card</h1>
      </div>
      <div className="addButton">
        <button onClick={showForm}>+</button>
      </div>

      <div>
        
      </div>
    </div>
  );
}

export default AddPage;
