import css from '../Feedback/feedback.module.css';

const Feedback = ({ feedbackTypes, totalFeedback, totalPositive }) => {
  return (
    <ul>
      <li className={css['feedback']}>Good: {feedbackTypes.good}</li>
      <li className={css['feedback']}>Neutral: {feedbackTypes.neutral}</li>
      <li className={css['feedback']}> Bad: {feedbackTypes.bad}</li>
      <li className={css['feedback']}> Total: {totalFeedback}</li>
      <li className={css['feedback']}> 😊 Positive: {totalPositive}%</li>
    </ul>
  );
};
export default Feedback;
