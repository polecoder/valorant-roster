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

        const agent = {
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
        
        console.log(agent)
        setAgent(agent);
      });
  }, [agentUuid])

  if (agent == null) return (
    <section>
      <p>Loading...</p>
    </section>
  )

  return (
    <section className="font-lato text-sm">
      <section className="py-8 px-4 relative overflow-hidden">
        <div className="w-1/2">
          <h2 className="uppercase text-5xl mb-4 font-tungsten">{agent.displayName}</h2>
          <p>{agent.description}</p>
        </div>
        <img className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-3/4 w-[300px]" src={agent.fullPortrait} alt="Temp" />
      </section>
    </section>
  );
}

export default AgentDetails;
