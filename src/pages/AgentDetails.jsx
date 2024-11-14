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
  const [activeAbility, setActiveAbility] = useState(null);

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
        setActiveAbility(agentData.abilities[0]);
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

  function handleAbilityClick(ability) {
    setActiveAbility(ability);
  }

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
      <section className="bg-primary-blue px-4 py-8 text-light">
        <h3 className="text-center font-tungsten text-5xl uppercase">
          Special abilities
        </h3>
        <div className="relative z-[1] flex justify-between px-2 py-8">
          {agent.abilities.map((ability, index) => (
            <button
              type="button"
              key={index}
              onClick={() => handleAbilityClick(ability)}
            >
              <img
                src={ability.displayIcon}
                alt={ability.displayName}
                className={`h-12 w-12 cursor-pointer transition-all duration-300 hover:scale-110 ${
                  activeAbility?.displayName === ability.displayName
                    ? "opacity-100" // style for selected ability
                    : "opacity-50" // style for unselected ability
                }`}
              />
            </button>
          ))}
        </div>
        <div className="relative z-[1]">
          <h4 className="text-center font-tungsten text-3xl uppercase">
            {activeAbility.displayName}
          </h4>
          <div className="relative">
            <img
              src={agent.role.displayIcon}
              alt={agent.role.displayName}
              className="absolute left-1/2 top-1/2 z-[0] w-[225px] -translate-x-1/2 -translate-y-1/2 opacity-10"
            />
            <p className="relative z-[1] px-2 pt-4 text-sm">
              {activeAbility.description}
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}

export default AgentDetails;
