function AgentDetailsHero({ agent }) {
  // format the agent background colors properly and create the gradient
  const colorsArray = agent.backgroundGradientColors.map(
    (color) => `#${color.slice(0, 6)}`,
  );
  const agentBackgroundStyle = {
    backgroundImage: `linear-gradient(to bottom, ${colorsArray[0]}, ${colorsArray[1]}, ${colorsArray[2]}, ${colorsArray[3]})`,
  };

  return (
    <section
      id="hero"
      className="relative mx-auto flex max-w-[500px] items-center overflow-hidden px-4 py-8 xs:h-[325px] xs:px-8 md:h-[350px] md:max-w-[675px]"
    >
      <div className="w-[150px] md:w-[200px]">
        <h2 className="mb-4 font-tungsten text-5xl uppercase md:text-6xl">
          {agent.displayName}
        </h2>
        <p className="md:text-base">{agent.description}</p>
      </div>
      <div
        className="agent_bg-effect absolute left-3/4 top-1/2 h-[250px] w-[200px] -translate-x-1/2 -translate-y-1/2 md:left-[80%] md:h-[300px] md:w-[250px]"
        style={agentBackgroundStyle}
      ></div>
      <img
        className="absolute left-3/4 top-1/2 w-[300px] -translate-x-1/2 -translate-y-1/2 md:left-[80%] md:w-[350px]"
        src={agent.fullPortrait}
        alt={agent.displayName}
      />
    </section>
  );
}

export default AgentDetailsHero;
