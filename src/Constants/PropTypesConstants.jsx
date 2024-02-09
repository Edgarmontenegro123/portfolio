import PropTypes from "prop-types";

export const PropTypesConstantsCard =  {
    project: PropTypes.shape({
        id: PropTypes.number.isRequired,
        avatar: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
        video: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        tech: PropTypes.string.isRequired,
        deploy: PropTypes.string.isRequired,
        gitHub: PropTypes.string.isRequired
    }).isRequired
}

export const PropTypesConstantsAccordionItem = {
    video: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    tech: PropTypes.string.isRequired,
    deploy: PropTypes.string.isRequired,
    gitHub: PropTypes.string.isRequired
}
