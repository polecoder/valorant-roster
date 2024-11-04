
import PropTypes from "prop-types";

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
function AgentDetails({ agent }) {
    return <>
        <div>
            <h2>Hola, mundo!</h2>
        </div>
    </>;
}

AgentDetails.propTypes = {
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

export default AgentDetails;