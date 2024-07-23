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
      <h3
        className="hover-text before:border-primary-red absolute bottom-0 left-1/2 z-10 w-[110px] -translate-x-1/2 -translate-y-1/2 text-center text-2xl text-white transition-transform duration-300 before:absolute before:left-1/2 before:top-1/2 before:z-[-1] before:w-full before:-translate-x-1/2 before:-translate-y-1/2 before:border-[0.4em] before:border-y-[0.6em] before:border-solid before:border-l-transparent before:border-r-transparent"
        /* style={{
          backgroundImage:
            "url('https://s2.svgbox.net/pen-brushes.svg?ic=brush-4&color=000')",
        }} */
      >
        {agent.displayName}
      </h3>
    </div>
  );
}

export default Agent;
