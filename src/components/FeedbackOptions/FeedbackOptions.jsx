import css from "./FeedbackOptions.module.css"
import PropTypes from 'prop-types'

 const FeedbackOptions = ({options, onLeaveFeedback}) => {
return (
    <div className={css.feedbackBtnBlock}>
            {options.map((option, index) => (
        <li 
        className={css.feedbackBtnList}
        key={index}>
          <button
            type="button"
            onClick={() => onLeaveFeedback(option)}
            className={css.feedbackBtn}
          >
            {option}
          </button>
        </li>
      ))}
    </div>
    )
}
export default FeedbackOptions;

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
  };