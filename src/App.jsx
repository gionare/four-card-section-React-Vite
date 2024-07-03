import "./App.css";

import Starter from "./components/starter/Starter";
import Supervisor from "./components/Supervisor";
import TeamBuilder from "./components/TeamBuilder";
import Karma from "./components/Karma";
import Calculator from "./components/Calculator";

function App() {
  return (
    <>
      <Starter />
      <main>
        <Supervisor />
        <div className="box-container">
          <TeamBuilder />
          <Karma />
        </div>
        <Calculator />
      </main>
    </>
  );
}

export default App;
