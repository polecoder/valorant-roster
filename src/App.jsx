import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AgentList from "./components/AgentList";
import AgentDetails from "./components/AgentDetails";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./css/output.css";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="bg-light pt-16 font-tungsten">
          <Routes>
            <Route path="/agents" element={ <AgentList /> } />
            <Route path="/agents/:id" element={ <AgentDetails /> } />
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
