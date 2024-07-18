import { useEffect, useState } from "react";
import Agent from "./Agent";

function AgentList() {
  const AGENT_URL =
    "https://valorant-api.com/v1/agents?isPlayableCharacter=true";
  const [agents, setAgents] = useState([]); // Guardo en "agents" solo los datos que necesito

  useEffect(() => {
    fetch(AGENT_URL)
      .then((response) => response.json())
      .then((data) => {
        const agentsRawData = data.data;
        console.log(agentsRawData);

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
        console.log(agents);
      });
  }, []);

  return (
    <div>
      <h1>AgentList</h1>
      {agents.length > 0 ? <Agent agent={agents[0]} /> : <p>Loading...</p>}
    </div>
  );
}

export default AgentList;
