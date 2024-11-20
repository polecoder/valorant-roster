import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import AgentDetailsHero from "../components/AgentDetails/AgentDetailsHero";
import AgentDetailsAbilities from "../components/AgentDetails/AgentDetailsAbilities";
import AgentDetailsRole from "../components/AgentDetails/AgentDetailsRole";

/**
 * Agent component for the List Display.
 *
 * @param {Object} props
 * @param {AgentType} props.agent
 * @returns {JSX.Element}
 */
function AgentDetails({ agents = [] }) {
  const agentUuid = useParams().id;
  const agent = agents.find((agent) => agent.uuid === agentUuid);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [agentUuid]);

  // show loading component if the agent is not loaded yet
  if (agent == null)
    return <Loading text="We're loading the agent for you. Hold tight!" />;

  // find similar agents
  const similarAgents = agents.filter(
    (similarAgent) =>
      similarAgent.role.displayName === agent.role.displayName &&
      similarAgent.uuid !== agentUuid,
  );

  return (
    <section className="font-lato text-sm">
      <AgentDetailsHero agent={agent} />
      <AgentDetailsAbilities agent={agent} />
      <AgentDetailsRole agent={agent} similarAgents={similarAgents} />
    </section>
  );
}

export default AgentDetails;
