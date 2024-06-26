import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./AddForm.css";

function AddForm({ setIsAddFormVisible, setViewPage }) {
  const [IFSCCode, setIFSCCode] = useState("");
  const [holderName, setHolderName] = useState("");
  const [accountNo, setIAccountNo] = useState("");
  const [bankName, setBankName] = useState("");

  const addForm = () => {
    const data = {
      IFSCCode: IFSCCode,
      holderName: holderName,
      accountNo: accountNo,
      bankName: bankName,
    };

    // Retrieve existing data from localStorage
    const existingData = JSON.parse(localStorage.getItem("datas")) || [];

    if (
      IFSCCode === "" ||
      holderName === "" ||
      accountNo === "" ||
      bankName === ""
    ) {
      toast.error("All fields are required!!");
    } else {
      // Add new data to existing data
      const newData = [...existingData, data];
      // Save the updated data to localstorage
      localStorage.setItem("datas", JSON.stringify(newData));
      setIsAddFormVisible(false); //afterr fill hide the Addform
      setViewPage(true); //show the pagecomponent
    }
  };

  // Function to close the form
  const close = () => {
    setIsAddFormVisible(false);
  };

  return (
    <div className="container">
      <button className="close" onClick={close}>
        x
      </button>
      <div className="heading">Add New Bank Card</div>
      <div className="input-form">
        <label htmlFor="ifsc">Bank IFSC</label>
        <input
          type="text"
          placeholder="Enter Your IFSC Code"
          value={IFSCCode}
          onChange={(e) => setIFSCCode(e.target.value)}
        />
        <label htmlFor="holder">Card Holder Name</label>
        <input
          type="text"
          placeholder="Enter Your Card Holder Name"
          value={holderName}
          onChange={(e) => setHolderName(e.target.value)}
        />
        <label htmlFor="bank">Bank Account Number</label>
        <input
          type="text"
          placeholder="Enter Your Bank Account Number"
          value={accountNo}
          onChange={(e) => setIAccountNo(e.target.value)}
        />
        <label htmlFor="name">Bank Name</label>
        <input
          type="text"
          placeholder="Enter Your Bank Name"
          value={bankName}
          onChange={(e) => setBankName(e.target.value)}
        />
        <button className="button1" onClick={addForm}>
          Next
        </button>
        <ToastContainer />
      </div>
    </div>
  );
}

export default AddForm;
