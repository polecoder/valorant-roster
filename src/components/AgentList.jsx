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
      });
  }, []);

  return (
    <div>
      <div className="mb-8 p-4">
        <h2 className="mb-8 text-center">AgentList</h2>
        <p>
          Discover the unique and dynamic agents of Valorant, each equipped with
          distinct abilities and playstyles. Explore their backgrounds, special
          skills, and roles to gain a competitive edge in your next match.
        </p>
      </div>
      <div className="flex h-fit flex-col gap-y-24 overflow-x-hidden pb-16">
        {agents.length > 0 ? (
          agents.map((agent) => <Agent key={agent.uuid} agent={agent} />)
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default AgentList;
