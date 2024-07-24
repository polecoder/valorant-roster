import "./css/output.css";
import AgentList from "./components/AgentList";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="bg-light font-tungsten text-dark">
        <AgentList />
      </div>
    </>
  );
}

export default App;
