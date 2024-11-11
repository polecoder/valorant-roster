import { useEffect, useState } from "react";
import Agent from "./Agent";

function AgentList() {
  const AGENTS_URL =
    "https://valorant-api.com/v1/agents?isPlayableCharacter=true";
  const [agents, setAgents] = useState([]); // Guardo en "agents" solo los datos que necesito

  useEffect(() => {
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
  }, []);

  return (
    <>
      <h2 className="xs:text-6xl pb-4 pt-6 text-center text-5xl uppercase">
        Agents
      </h2>
      <div className="xs:gap-12 mx-auto grid h-fit max-w-fit grid-cols-2 gap-x-3 gap-y-6 overflow-x-hidden pb-16 pt-4 md:grid-cols-3 lg:grid-cols-3">
        {agents.length > 0 ? (
          agents.map((agent) => <Agent key={agent.uuid} agent={agent} />)
        ) : (
          <p className="text-center font-lato text-xl text-primary-red md:text-2xl">
            Loading...
          </p>
        )}
      </div>
    </>
  );
}

export default AgentList;
