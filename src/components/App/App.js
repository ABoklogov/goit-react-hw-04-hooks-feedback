import { useState, useEffect } from 'react';
import Statistics from '../Statistics';
import FeedbackOptions from '../FeedbackOptions';
import Section from '../Section';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  // state = {
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  // };
  const arrState = ['good', 'neutral', 'bad'];

  const addReview = review => {
    switch (review) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;

      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;

      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;

      default:
        return;
    }
  };

  // let totalFeedback = 0;
  // let positiveFeedbackPercentage = 0;

  // useEffect(() => {
  //   totalFeedback = 1;
  //   positiveFeedbackPercentage = Math.round((good * 100) / totalFeedback);
  // }, [good, neutral, bad]);

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return Math.round((good * 100) / total);
  };

  // this.setState(prevReview => ({
  //   [review]: prevReview[review] + 1,
  // }));

  // render() {
  // const { good, neutral, bad } = this.state;
  // const arrState = Object.keys(this.state);
  // const totalFeedback = this.countTotalFeedback();
  // const positivePercentage = this.countPositiveFeedbackPercentage();

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
  // }
};

export default App;
