import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Agents from "./pages/Agents";
import AgentDetails from "./pages/AgentDetails";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./css/output.css";

function App() {
  const AGENTS_URL =
    "https://valorant-api.com/v1/agents?isPlayableCharacter=true";
  const [agents, setAgents] = useState([]); // Guardo en "agents" solo los datos que necesito
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      fetch(AGENTS_URL)
        .then((response) => response.json())
        .then((data) => {
          const agentsRawData = data.data;

          const agentsArray = [];
          agentsRawData.forEach((agent) => {
            const {
              abilities,
              background,
              backgroundGradientColors,
              bustPortrait,
              description,
              displayIcon,
              displayIconSmall,
              displayName,
              fullPortrait,
              fullPortraitV2,
              killfeedPortrait,
              role,
              uuid,
            } = agent;

            agentsArray.push({
              abilities,
              background,
              backgroundGradientColors,
              bustPortrait,
              description,
              displayIcon,
              displayIconSmall,
              displayName,
              fullPortrait,
              fullPortraitV2,
              killfeedPortrait,
              role,
              uuid,
            });
          });
          setAgents(agentsArray);
        });
    }
    fetchData();
  }, []);

  return (
    <>
      <Router>
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex flex-grow flex-col justify-center bg-light pt-16 font-tungsten">
            <Routes>
              <Route path="/agents" element={<Agents agents={agents} />} />
              <Route
                path="/agents/:id"
                element={<AgentDetails agents={agents} />}
              />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
