import "./App.css";
import phrases from "./data/phrases.json";
import Fortuna from "./components/Fortuna";

function App() {
  return (
    <>
      <Fortuna data={phrases} />
    </>
  );
}

export default App;
