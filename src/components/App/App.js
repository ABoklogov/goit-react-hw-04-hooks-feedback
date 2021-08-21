import { useState } from 'react';
import Statistics from '../Statistics';
import FeedbackOptions from '../FeedbackOptions';
import Section from '../Section';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const arrState = Object.keys({ good, neutral, bad });

  const addReview = review => {
    switch (review) {
      case arrState[0]:
        setGood(prevGood => prevGood + 1);
        break;

      case arrState[1]:
        setNeutral(prevNeutral => prevNeutral + 1);
        break;

      case arrState[2]:
        setBad(prevBad => prevBad + 1);
        break;

      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return Math.round((good * 100) / total);
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions options={arrState} onLeaveFeedback={addReview} />
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      </Section>
    </>
  );
};

export default App;
