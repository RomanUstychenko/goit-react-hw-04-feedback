import css from "./FeedbackOptions.module.css"
// import PropTypes from 'prop-types'

 const FeedbackOptions = ({onLeaveFeedback}) => {
return (
<div className={css.feedbackBtnList}>
    <button onClick={() => onLeaveFeedback("good")} className={css.feedbackBtn}>Good</button>
             <button onClick={() => onLeaveFeedback("neutral")} className={css.feedbackBtn}>Neutral</button>
             <button onClick={() => onLeaveFeedback("bad")} className={css.feedbackBtn}>Bad</button>
             </div>
    )
}
export default FeedbackOptions;

// FeedbackOptions.propTypes = {
//     onLeaveFeedback: PropTypes.string.isRequired,
   
// };