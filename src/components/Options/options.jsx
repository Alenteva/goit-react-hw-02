import css from '../Options/options.module.css';

const Options = ({ totalFeedback, updateFeedback, resetFeedbackType }) => {
  return (
    <div>
      <ul className={css['optionsBox']}>
        <li>
          <button onClick={() => updateFeedback('good')}>Good 👍</button>
        </li>
        <li>
          <button onClick={() => updateFeedback('neutral')}>Neutral 😐</button>
        </li>
        <li>
          <button onClick={() => updateFeedback('bad')}>Bad 🙁</button>
        </li>

        {totalFeedback > 0 && (
          <li>
            <button onClick={resetFeedbackType}>Reset</button>
          </li>
        )}
      </ul>
    </div>
  );
};
export default Options;
