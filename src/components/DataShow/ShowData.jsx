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
              <>
              <div className="radioBtn">

            
             <input type="radio" />
              <div className="dataShow">
                <h2>IFSC Code:<br></br> {IFSCCode}</h2><br />
                <img src="./image.png" alt="" />
                {/* <h2>Holder Name: {holderName}</h2><br></br> */}
              
                <h2> {bankName}</h2>
                <h2> {accountNo}</h2><br></br>
              </div>
              </div>
              </>
            );
          })}
        
      </div>
    </div>
  );
}
export default ShowData;
