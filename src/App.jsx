import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Agents from "./pages/Agents";
import AgentDetails from "./components/AgentDetails";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./css/output.css";

function App() {
  return (
    <>
      <Router>
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex flex-grow flex-col justify-center bg-light pt-16 font-tungsten">
            <Routes>
              <Route path="/agents" element={<Agents />} />
              <Route path="/agents/:id" element={<AgentDetails />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
