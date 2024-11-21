import { Link } from "react-router-dom";

function AgentDetailsRole({ agent, similarAgents }) {
  return (
    <section className="mx-auto max-w-[400px] px-4 py-8 text-primary-blue xs:max-w-[500px] xs:px-8">
      <h3 className="text-center font-tungsten text-5xl uppercase text-primary-blue">
        Role
      </h3>
      <div className="flex items-center justify-between gap-8 pb-6 pt-4 xs:px-8 md:gap-12">
        <p className="w-2/3 max-w-[250px] text-sm md:text-base">
          {agent.role.description}
        </p>
        <div className="relative flex h-16 w-16 flex-col justify-center bg-primary-blue p-1 before:absolute before:left-0 before:top-0 before:h-full before:w-full before:scale-[112%] before:border before:border-primary-red xs:h-24 xs:w-24">
          <img
            className="mx-auto my-1 h-8 w-8 xs:h-10 xs:w-10"
            src={agent.role.displayIcon}
            alt={agent.role.displayName}
          />
          <h4 className="text-center font-tungsten uppercase text-light xs:text-xl">
            {agent.role.displayName}
          </h4>
        </div>
      </div>
      <div className="py-4 xs:px-8">
        <h4 className="text-center font-tungsten text-3xl uppercase italic text-primary-blue">
          Similar agents
        </h4>
        <p className="pt-4">
          Unleash your full potential! Discover other{" "}
          <span className="font-bold uppercase text-primary-red">
            {agent.role.displayName}
          </span>{" "}
          agents, each with their own unique abilities to shift the tide of
          battle.
        </p>
        <div className="mx-auto grid w-fit grid-cols-3 gap-6 pt-6 xs:flex xs:w-auto xs:justify-between">
          {similarAgents.map((agent) => (
            <Link
              key={agent.uuid}
              to={`/agents/${agent.uuid}`}
              className="relative bg-primary-blue p-1 before:absolute before:left-0 before:top-0 before:h-full before:w-full before:scale-105 before:border before:border-primary-red"
            >
              <div className="agent_bg-effect2 absolute left-0 top-0 h-full w-full bg-light"></div>
              <img
                src={agent.displayIcon}
                alt={agent.displayName}
                className="relative z-[1] h-10 w-10 transition-all duration-300 hover:scale-110"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AgentDetailsRole;
