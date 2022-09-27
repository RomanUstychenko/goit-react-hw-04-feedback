import css from "./FeedbackOptions.module.css"
import PropTypes from 'prop-types'

 const FeedbackOptions = ({options, onLeaveFeedback}) => {
    console.log(options)
return (
    <div className={css.feedbackBtnBlock}>
            {options.map((option, index) => (
        <li 
        className={css.feedbackBtnList}
        key={index}>
          <button
            type="button"
            name={option}
            onClick={onLeaveFeedback}
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