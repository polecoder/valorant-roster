import { transformImage } from "../utils/transformImage";

/**
 * @typedef {Object} AgentType
 * @property {Array} abilities
 * @property {string} background
 * @property {Array} backgroundGradientColors
 * @property {string} bustPortrait
 * @property {string} description
 * @property {string} displayIcon
 * @property {string} displayIconSmall
 * @property {string} displayName
 * @property {string} fullPortrait
 * @property {string} fullPortraitV2
 * @property {string} killfeedPortrait
 * @property {Object} role
 * @property {string} uuid
 */

/**
 * Agent component for the List Display.
 *
 * @param {Object} props
 * @param {AgentType} props.agent
 * @returns {JSX.Element}
 */

function Agent({ agent }) {
  const croppedImage = transformImage(
    "c_fill,w_280,ar_0.55/c_crop,w_280,h_560,x_10,y_50",
    agent.fullPortrait,
  );

  return (
    <div className="relative mx-auto w-fit">
      <h2
        className="absolute bottom-8 left-1/2 -translate-x-1/2 -translate-y-1/2 px-7 py-3 text-4xl text-white"
        style={{
          backgroundImage:
            "url('https://s2.svgbox.net/pen-brushes.svg?ic=brush-4&color=000')",
        }}
      >
        {agent.displayName}
      </h2>
      <img src={croppedImage} alt={agent.displayName} />
    </div>
  );
}

export default Agent;
