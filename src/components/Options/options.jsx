import css from '../Options/options.module.css';

const Options = ({ totalFeedback, updateFeedback, resetFeedbackType }) => {
  return (
    <div>
      <ul className={css['optionsBox']}>
        <li>
          <button
            className={css['optionsButton']}
            onClick={() => updateFeedback('good')}
          >
            Good 👍
          </button>
        </li>
        <li>
          <button
            className={css['optionsButton']}
            onClick={() => updateFeedback('neutral')}
          >
            Neutral 😐
          </button>
        </li>
        <li>
          <button
            className={css['optionsButton']}
            onClick={() => updateFeedback('bad')}
          >
            Bad 🙁
          </button>
        </li>

        {totalFeedback > 0 && (
          <li>
            <button
              className={css['optionsButton']}
              onClick={resetFeedbackType}
            >
              Reset
            </button>
          </li>
        )}
      </ul>
    </div>
  );
};
export default Options;
