import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { keypadKeys } from "./utils/constants";
import { useState } from "react";
import { calculate, clear, total } from "./redux/calculator";
import Wti from "./components/Wti";
import History from "./components/History";

function App() {
  const dispatch = useDispatch();
  const { calculation, result, clearScreen } = useSelector(
    (state) => state.calculation
  );
  const [shownResult, setShownResult] = useState(0);

  const handleKeyPadClick = (e) => {
    if (clearScreen) {
      dispatch(clear());
      if (!isNaN(e.target.innerText)) {
        dispatch(calculate(e.target.innerText));
      }
      return;
    }
    if (!isNaN(e.target.innerText)) {
      dispatch(calculate(calculation + e.target.innerText));
    } else if (isNaN(e.target.innerText)) {
      switch (e.target.innerText) {
        case ".":
          dispatch(calculate(calculation + e.target.innerText));
          break;
        case "+":
        case "-":
          if (isNaN(calculation.charAt(calculation.length - 1))) {
            let newcal = calculation.substring(0, calculation.length - 1);
            dispatch(calculate(newcal + e.target.innerText));
          } else {
            dispatch(calculate(calculation + e.target.innerText));
          }
          break;
        case "/":
        case "^":
        case "*":
          if (calculation.length == 0) {
            break;
          } else if (isNaN(calculation.charAt(calculation.length - 1))) {
            let newcal = calculation.substring(0, calculation.length - 1);
            dispatch(calculate(newcal + e.target.innerText));
          } else {
            dispatch(calculate(calculation + e.target.innerText));
          }
          break;
        case "=":
          setShownResult(result);
          dispatch(total(calculation));
          break;
        case "c":
          dispatch(clear());
          break;
        case "Del":
          dispatch(calculate(calculation.substring(0, calculation.length - 1)));
          break;
      }
    }
  };

  return (
    <div className="App">
      <div className={`calculator`}>
        <div className={`screen`}>
          <div className={`display`}>
            <h1 className="display-operation">{calculation}</h1>
          </div>
          <div className="result">
            <h2 className="result-text">{shownResult}</h2>
          </div>
        </div>
        <div className={`keyboard`}>
          {keypadKeys.map((keypads, index) => (
            <div className="keypad-row" key={`something-${index}`}>
              {keypads.map((keypad, index) => {
                return (
                  <button
                    onClick={handleKeyPadClick}
                    className="keypad-key"
                    key={index}
                  >
                    {keypad}
                  </button>
                );
              })}
            </div>
          ))}
        </div>
      </div>
      <History />
      <Wti />
    </div>
  );
}

export default App;
