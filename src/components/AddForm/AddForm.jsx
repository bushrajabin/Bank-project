import React, { useState } from "react";
import "./AddForm.css";
function AddForm({ onShowAddForm }) {
  const [IFSCCode, setIFSCCode] = useState("");
  const [holderName, setHolderName] = useState("");
  const [accountNo, setIAccountNo] = useState("");
  const [bankName, setBankName] = useState("");
  const addForm = (e) => {
    const datas = [];
    const data = {
      IFSCCode: IFSCCode,
      holderName: holderName,
      accountNo: accountNo,
      bankName: bankName,
    };
    if (
      IFSCCode == "" ||
      holderName == "" ||
      accountNo == "" ||
      bankName == ""
    ) {
      alert("All fields are required!!");
    } else {
      alert("Congratulations!!");
      datas.push(data)
      localStorage.setItem("datas",JSON.stringify(datas))
      onShowAddForm(false)
    }
  };

  // This is for close the add Form------
  const close=()=>{
    onShowAddForm(false)
  }

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
      </div>
    </div>
  );
}

export default AddForm;
