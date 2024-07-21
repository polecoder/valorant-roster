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
  return (
    <div className="relative mx-auto w-fit">
      <div className="hover-area absolute left-1/2 top-1/2 h-[290px] w-[150px] -translate-x-1/2 -translate-y-1/2"></div>
      <img
        src={agent.fullPortrait}
        alt={agent.displayName}
        className="hover-image w-[320px] max-w-fit scale-[115%] transition-transform duration-300"
      />
      <h2
        className="hover-text font-marker absolute -bottom-4 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 px-5 pb-[12px] pt-[11px] text-2xl text-white transition-transform duration-300"
        style={{
          backgroundImage:
            "url('https://s2.svgbox.net/pen-brushes.svg?ic=brush-4&color=000')",
        }}
      >
        {agent.displayName}
      </h2>
    </div>
  );
}

export default Agent;
