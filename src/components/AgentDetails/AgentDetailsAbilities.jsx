import { useEffect, useState } from "react";

function AgentDetailsAbilities({ agent }) {
  const [activeAbility, setActiveAbility] = useState(null);
  useEffect(() => {
    if (agent) {
      setActiveAbility(agent.abilities[0]);
    }
  }, [agent]);

  function handleAbilityClick(ability) {
    setActiveAbility(ability);
  }

  return (
    <section className="bg-primary-blue text-light">
      <section className="mx-auto max-w-[400px] px-4 py-8 xs:max-w-[500px] xs:px-8">
        <h3 className="text-center font-tungsten text-5xl uppercase">
          Special abilities
        </h3>
        <div className="md:mx-auto md:flex md:justify-center md:gap-8 md:p-8">
          <div className="relative z-[1] mx-auto flex justify-between px-2 py-8 xs:px-8 md:my-auto md:h-fit md:w-[55%] md:gap-4 md:p-0">
            {agent.abilities.slice(0, 4).map((ability, index) => (
              <button
                type="button"
                key={index}
                onClick={() => handleAbilityClick(ability)}
              >
                <img
                  src={ability.displayIcon}
                  alt={ability.displayName}
                  className={`h-12 w-12 cursor-pointer transition-all duration-300 hover:scale-110 xs:h-14 xs:w-14 ${
                    activeAbility?.displayName === ability.displayName
                      ? "opacity-100" // style for selected ability
                      : "opacity-50" // style for unselected ability
                  }`}
                />
              </button>
            ))}
          </div>
          <div className="relative z-[1]">
            <h4 className="text-center font-tungsten text-3xl uppercase italic">
              {activeAbility?.displayName || "No active ability"}
            </h4>
            <div className="relative">
              <img
                src={agent.role.displayIcon}
                alt={agent.role.displayName}
                className="absolute left-1/2 top-1/2 z-[0] w-[275px] -translate-x-1/2 -translate-y-1/2 opacity-10"
              />
              <div className="flex h-[275px] items-center px-2 pt-4 xs:h-[225px]">
                <p className="xs relative z-[1] mx-auto text-sm xs:px-8 md:p-0">
                  {activeAbility?.description ||
                    "There's no active ability to show a description"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default AgentDetailsAbilities;
