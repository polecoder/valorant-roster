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
    <Link
      key={agent.uuid}
      to={`/agents/${agent.uuid}`}
      className="mx-auto w-fit"
    >
      <div className="hover-area xs:h-[275px] xs:w-[186px] relative flex h-[200px] w-[135px] items-start justify-center overflow-hidden bg-primary-blue">
        <div className="relative">
          <div className="agent_bg-effect2 absolute left-1/2 top-[40%] h-3/4 w-1/2 -translate-x-1/2 -translate-y-1/2 bg-light"></div>
          <img
            src={agent.fullPortrait}
            alt={agent.displayName}
            className="hover-image xs:w-[350px] w-[250px] max-w-fit scale-[115%] transition-transform duration-300"
          />
        </div>
        <h3 className="xs:text-3xl absolute bottom-0 left-0 z-[1] w-full border-t border-light bg-primary-blue text-center text-xl uppercase text-light">
          {agent.displayName}
        </h3>
      </div>
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
