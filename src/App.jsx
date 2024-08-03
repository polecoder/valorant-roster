import AgentList from "./components/AgentList";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./css/output.css";

function App() {
  return (
    <>
      <Navbar />
      <div className="bg-light pt-16 font-tungsten">
        <AgentList />
      </div>
      <Footer />
    </>
  );
}

export default App;
