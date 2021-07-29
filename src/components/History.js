import React from "react";
import { useSelector } from "react-redux";

const History = () => {
  const { history } = useSelector((state) => state.calculation);
  if (history.length > 0) {
    return (
      <div className="container">
        <h1>History Operations</h1>
        <div className="history-wrapper">
          {history.map((element, index) => {
            return (
              <div key={`history-${index}`} className="history-item">
                <h3>{element.calculation}</h3>
                <h3>{element.result}</h3>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
  return <></>;
};

export default History;
