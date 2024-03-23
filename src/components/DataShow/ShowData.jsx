import React, { useState, useEffect } from "react";
import "./ShowData.css";

function ShowData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("datas"));
    if (storedData) {
      setData(storedData);
    }
  }, []);

  return (
    <div>
      <div className="cards">
        <h3 className="card">Cards</h3>
        <div className="card-list">
          {data.map((data, index, arr) => {
            const { IFSCCode, holderName, accountNo, bankName } = data;//In This line destructuring the data
            return (
              <div>
                <h2>IFSC Code: {IFSCCode}</h2>
                <h2>Holder Name: {holderName}</h2>
                <h2>Account Number: {accountNo}</h2>
                <h2>Bank Name: {bankName}</h2>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ShowData;
