import "./App.css";
import Wti from "./components/Wti";
import History from "./components/History";
import Calculator from "./components/Calculator";

function App() {
  return (
    <div className="App">
      <Calculator />
      <History />
      <Wti />
    </div>
  );
}

export default App;
