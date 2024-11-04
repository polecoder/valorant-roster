import PropTypes from "prop-types";
import { Link } from "react-router-dom";

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
    <Link key={agent.uuid} to={`/agents/${agent.uuid}`} className="relative mx-auto w-fit">
      <div className="hover-area absolute left-1/2 top-1/2 h-[190px] w-[150px] -translate-x-1/2 -translate-y-1/2 sm:h-[380px] sm:w-[200px]"></div>
      <img
        src={agent.fullPortrait}
        alt={agent.displayName}
        className="hover-image w-[320px] max-w-fit scale-[115%] transition-transform duration-300 sm:w-[375px]"
      />
      <h3 className="hover-text w-[135px] absolute bottom-0 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 px-7 text-center text-2xl uppercase text-white transition-transform duration-300 before:absolute before:left-1/2 before:top-[49%] before:z-[-1] before:w-full before:-translate-x-1/2 before:-translate-y-1/2 before:border-[8px] before:border-y-[16px] before:border-solid before:border-primary-red before:border-l-transparent before:border-r-transparent sm:px-9 sm:text-3xl sm:before:top-[51%] sm:before:border-y-[18px]">
        {agent.displayName}
      </h3>
    </Link>
  );
}

Agent.propTypes = {
  agent: PropTypes.shape({
    abilities: PropTypes.array.isRequired,
    background: PropTypes.string.isRequired,
    backgroundGradientColors: PropTypes.array.isRequired,
    bustPortrait: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    displayIcon: PropTypes.string.isRequired,
    displayIconSmall: PropTypes.string.isRequired,
    displayName: PropTypes.string.isRequired,
    fullPortrait: PropTypes.string.isRequired,
    fullPortraitV2: PropTypes.string.isRequired,
    killfeedPortrait: PropTypes.string.isRequired,
    role: PropTypes.object.isRequired,
    uuid: PropTypes.string.isRequired,
  }).isRequired,
};

export default Agent;
