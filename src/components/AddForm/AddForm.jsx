import React from "react";
import "./AddForm.css";
function AddForm() {
  return (
    <div className="container">
      <div className="heading">Add New Bank Card</div>
      <div className="input-form">
        <label htmlFor="ifsc">Bank IFSC</label>
        <input type="text" placeholder="Enter Your IFSC Code" />
        <label htmlFor="holder">Card Holder Name</label>
        <input type="text" placeholder="Enter Your Card Holder Name" />
        <label htmlFor="bank">Bank Account Number</label>
        <input type="text" placeholder="Enter Your Bank Account Number" />
        <label htmlFor="name">Bank Name</label>
        <input type="text" placeholder="Enter Your Bank Name" />
        <button className="button1">Next</button>
      </div>
    </div>
  );
}

export default AddForm;
