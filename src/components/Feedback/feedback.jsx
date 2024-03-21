const Feedback = ({ feedbackTypes, totalFeedback, totalPositive }) => {
  return (
    <ul>
      <li>Good: {feedbackTypes.good}</li>
      <li>Neutral: {feedbackTypes.neutral}</li>
      <li> Bad: {feedbackTypes.bad}</li>
      <li> Total: {totalFeedback}</li>
      <li> Positive: {totalPositive}%</li>
    </ul>
  );
};
export default Feedback;
