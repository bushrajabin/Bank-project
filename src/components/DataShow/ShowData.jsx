import React, { useState, useEffect } from "react";
import "./ShowData.css";

function ShowData() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("datas"));
    setData(storedData);
  }, []);

  return (
    <div className="cards">
      <h3 className="card">Cards</h3>
      <div className="card-list">
        {data.length >= 1 &&
          data?.map((detail, index, arr) => {
            const { IFSCCode, holderName, accountNo, bankName } = detail; //In This line destructuring the data
            return (
              <div className="div-main">
                <h2>IFSC Code: {IFSCCode}</h2>
                <h2>Holder Name: {holderName}</h2>
                <h2>Account Number: {accountNo}</h2>
                <h2>Bank Name: {bankName}</h2>
              </div>
            );
          })}
        
      </div>
    </div>
  );
}
export default ShowData;
