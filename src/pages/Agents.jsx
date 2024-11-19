import AgentList from "../components/AgentList";

function Agents({ agents }) {
  return (
    <>
      <h2 className="pt-6 text-center text-xl uppercase leading-4 xs:pt-8 xs:text-3xl xs:leading-6 md:pt-10">
        Meet the{" "}
        <span className="block text-5xl text-primary-red xs:text-6xl">
          Agents
        </span>
      </h2>
      <AgentList agents={agents} />
    </>
  );
}

export default Agents;
