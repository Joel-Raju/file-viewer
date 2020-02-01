import PropTypes from 'prop-types';

export const fileProps = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  file: PropTypes.object.isRequired,
  fileName: PropTypes.string.isRequired
};
