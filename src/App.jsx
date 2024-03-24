import { useState, useEffect } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import './App.css';
import Description from './components/Description/description';
import Options from './components/Options/options';
import Feedback from './components/Feedback/feedback';
import Notification from './components/Feedback/notification';

function App() {
  // const [count, setCount] = useState(0);

  const [feedbackTypes, setfeedbackType] = useState(() => {
    const savedFeedbackTypes = JSON.parse(
      localStorage.getItem('feedbackTypes')
    );
    if (savedFeedbackTypes !== null) {
      return savedFeedbackTypes;
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  useEffect(() => {
    localStorage.setItem('feedbackTypes', JSON.stringify(feedbackTypes));
  }, [feedbackTypes]);

  const updateFeedback = feedbackType => {
    setfeedbackType({
      ...feedbackTypes,
      [feedbackType]: feedbackTypes[feedbackType] + 1,
    });
  };

  const totalFeedback =
    feedbackTypes.good + feedbackTypes.neutral + feedbackTypes.bad;
  const totalPositive = Math.round((feedbackTypes.good / totalFeedback) * 100);

  const resetFeedbackType = () => {
    setfeedbackType({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        resetFeedbackType={resetFeedbackType}
      />

      {totalFeedback > 0 ? (
        <Feedback
          feedbackTypes={feedbackTypes}
          totalFeedback={totalFeedback}
          totalPositive={totalPositive}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
