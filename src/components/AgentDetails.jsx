import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

/**
 * Agent component for the List Display.
 *
 * @param {Object} props
 * @param {AgentType} props.agent
 * @returns {JSX.Element}
 */
function AgentDetails() {
  const agentUuid = useParams().id;

  const [agent, setAgent] = useState(null);

  useEffect(() => {
    const AGENT_URL = `https://valorant-api.com/v1/agents/${agentUuid}`;
    fetch(AGENT_URL)
      .then((response) => response.json())
      .then((data) => {
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
        } = data.data;

        const agentData = {
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
        };
        setAgent(agentData);
      });
  }, [agentUuid]);

  if (agent == null)
    return (
      <section>
        <p>Loading...</p>
      </section>
    );

  // format the agent background colors properly
  const colorsArray = agent.backgroundGradientColors.map(
    (color) => `#${color.slice(0, 6)}`,
  );

  const agentBackgroundStyle = {
    backgroundImage: `linear-gradient(to bottom, ${colorsArray[0]}, ${colorsArray[1]}, ${colorsArray[2]}, ${colorsArray[3]})`,
  };

  return (
    <section className="font-lato text-sm">
      <section className="relative overflow-hidden px-4 py-8">
        <div className="w-1/2">
          <h2 className="mb-4 font-tungsten text-5xl uppercase">
            {agent.displayName}
          </h2>
          <p>{agent.description}</p>
        </div>
        <div
          className="agent_bg-effect absolute left-3/4 top-1/2 h-[250px] w-[200px] -translate-x-1/2 -translate-y-1/2"
          style={agentBackgroundStyle}
        ></div>
        <img
          className="absolute left-3/4 top-1/2 w-[300px] -translate-x-1/2 -translate-y-1/2"
          src={agent.fullPortrait}
          alt={agent.displayName}
        />
      </section>
    </section>
  );
}

export default AgentDetails;
