import Loading from "./Loading";
import Agent from "./Agent";

function AgentList({ agents = [] }) {
  return (
    <>
      {agents.length > 0 ? (
        <div className="mx-auto grid h-fit max-w-fit grid-cols-2 gap-x-3 gap-y-6 overflow-x-hidden py-6 xs:gap-12 xs:py-8 md:grid-cols-3 md:py-10 lg:grid-cols-4">
          {agents.map((agent) => (
            <Agent key={agent.uuid} agent={agent} />
          ))}
        </div>
      ) : (
        <Loading text="We're loading the playable agents for you. Hold tight!" />
      )}
    </>
  );
}

export default AgentList;
