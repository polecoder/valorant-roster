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
      <h2 className="pb-4 pt-6 text-center text-5xl uppercase md:text-6xl">
        Agents
      </h2>
      <div className="mx-auto flex h-fit flex-col gap-y-24 overflow-x-hidden pb-16 pt-8 md:grid md:max-w-fit md:grid-cols-2 md:gap-y-48 md:pb-32 md:pt-12 lg:grid-cols-3">
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
