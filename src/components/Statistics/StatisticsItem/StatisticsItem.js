import PropTypes from 'prop-types';

const StatisticsItem = ({ lebel, value }) => {
  return (
    <li>
      {lebel} : {value}
    </li>
  );
};

StatisticsItem.propTypes = {
  lebel: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default StatisticsItem;
