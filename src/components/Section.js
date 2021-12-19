import propTypes from 'prop-types';

const Section = ({ title, children }) => {
  return (
    <div>
      {title && <h2>{title}</h2>}
      {children}
    </div>
  );
};
Section.propTypes = {
  title: propTypes.string,
  children: propTypes.node,
};
export default Section;
