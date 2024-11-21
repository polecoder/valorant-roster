function AgentDetailsHero({ agent }) {
  // format the agent background colors properly and create the gradient
  const colorsArray = agent.backgroundGradientColors.map(
    (color) => `#${color.slice(0, 6)}`,
  );
  const agentBackgroundStyle = {
    backgroundImage: `linear-gradient(to bottom, ${colorsArray[0]}, ${colorsArray[1]}, ${colorsArray[2]}, ${colorsArray[3]})`,
  };

  return (
    <section className="relative mx-auto flex max-w-[400px] items-center overflow-hidden px-4 py-8 xs:h-[350px] xs:max-w-[500px] xs:px-8 md:h-[400px] md:max-w-[1000px] lg:h-[450px] lg:px-12">
      <div className="w-[150px] xs:w-[200px] md:w-[350px] lg:w-[450px]">
        <h2 className="mb-4 font-tungsten text-5xl uppercase md:text-6xl">
          {agent.displayName}
        </h2>
        <p className="md:text-base">{agent.description}</p>
      </div>
      <div
        className="agent_bg-effect absolute left-3/4 top-1/2 h-[250px] w-[200px] -translate-x-1/2 -translate-y-1/2 xs:h-[325px] xs:w-[250px] md:top-2/3 md:h-[500px] md:w-[350px] lg:h-[600px] lg:w-[450px]"
        style={agentBackgroundStyle}
      ></div>
      <img
        className="absolute left-3/4 top-1/2 w-[300px] -translate-x-1/2 -translate-y-1/2 xs:w-[350px] md:top-2/3 md:w-[650px] lg:w-[750px]"
        src={agent.fullPortrait}
        alt={agent.displayName}
      />
    </section>
  );
}

export default AgentDetailsHero;
