import PropTypes from 'prop-types';
import './Statistics.scss';
import StatisticsItem from './StatisticsItem';
import Notification from './Notification';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      <h2>Statistics</h2>
      {total === 0 ? (
        <Notification message="No feedback given" />
      ) : (
        <ul className="statistics-list">
          <StatisticsItem lebel="Good" value={good} />
          <StatisticsItem lebel="Neutral" value={neutral} />
          <StatisticsItem lebel="Bad" value={bad} />
          <StatisticsItem lebel="Total" value={total} />
          <StatisticsItem
            lebel="Positive feedback"
            value={total === 0 ? 0 : `${positivePercentage}%`}
          />
        </ul>
      )}
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
