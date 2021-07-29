import React, { useState } from "react";

const Wti = () => {
  const [data, setData] = useState(null);
  const getData = async () => {
    try {
      const response = await fetch(
        "https://api.oilpriceapi.com/v1/prices/latest/?by_code=WTI_USD",
        {
          method: "GET", // *GET, POST, PUT, DELETE, etc.
          headers: {
            "Content-Type": "application/json",
            Authorization: "Token 3b670ae2e08b5f2fc9b3febdac621b6c",
          },
        }
      );
      let dataString = await response.text();
      const { data: wtiData } = JSON.parse(dataString);
      setData(wtiData);
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <div className="container">
      <h1>WTI PRICE</h1>

      <button onClick={getData} className="wti-button">
        GET WTI PRICE
      </button>
      {data?.price && (
        <div className="price-card">
          <p className="price-text">
            {data.code} Price today is
            <br />
            {data.formatted}
          </p>
        </div>
      )}
    </div>
  );
};

export default Wti;
