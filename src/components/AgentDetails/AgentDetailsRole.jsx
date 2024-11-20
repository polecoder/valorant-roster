import { Link } from "react-router-dom";

function AgentDetailsRole({ agent, similarAgents }) {
  return (
    <section className="px-4 py-8 text-primary-blue xs:px-8">
      <h3 className="text-center font-tungsten text-5xl uppercase text-primary-red">
        Role
      </h3>
      <div className="flex items-center justify-center gap-8 py-4 md:gap-12 md:py-8">
        <p className="w-2/3 max-w-[200px] text-sm md:text-base">
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
      <div className="py-4">
        <h4 className="text-center font-tungsten text-3xl uppercase italic text-primary-red">
          Similar agents
        </h4>
        <div className="mx-auto grid w-fit grid-cols-3 gap-6 px-2 pt-4">
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
