import PropTypes from 'prop-types';

export const Head = ({ clas, id }) => {
  return (
    <p className={clas} id={id}>
      I am Head
    </p>
  );
};