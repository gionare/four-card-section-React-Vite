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
        <Supervisor
          title={"Supervisor"}
          description={"Monitors activity to identify project roadblocks"}
        />
        <div className="box-container">
          <TeamBuilder
            title={"Team Builder"}
            description={
              "Scans our talent network to create the optimal team for your project"
            }
          />
          <Karma
            title={"Karma"}
            description={"Regularly evaluates our talent to ensure quality"}
          />
        </div>
        <Calculator
          title={"Calculator"}
          description={
            "Uses data from past projects to provide better delivery estimates"
          }
        />
      </main>
    </>
  );
}

export default App;
