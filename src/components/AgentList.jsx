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
      <h2 className="pb-4 pt-6 text-center text-5xl uppercase xs:text-6xl">
        Agents
      </h2>

      {agents.length > 0 ? (
        <div className="mx-auto grid h-fit max-w-fit grid-cols-2 gap-x-3 gap-y-6 overflow-x-hidden pb-16 pt-4 xs:gap-12 md:grid-cols-3 lg:grid-cols-4">
          {agents.map((agent) => (
            <Agent key={agent.uuid} agent={agent} />
          ))}
        </div>
      ) : (
        <div className="p-4 pb-8">
          <p className="pb-8 text-center font-lato text-xl md:pb-10 md:text-2xl">
            We're loading the playable agents for you. Hold tight!
          </p>
          <img
            src="/img/loading.svg"
            alt="Loading"
            className="mx-auto h-12 w-12 md:h-16 md:w-16"
          />
        </div>
      )}
    </>
  );
}

export default AgentList;
