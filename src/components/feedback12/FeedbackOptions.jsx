import css from "./Feedback.module.css"

 const FeedbackOptions = ({onLeaveFeedback}) => {
return (
<>
    <button onClick={() => onLeaveFeedback("good")} className={css.feedbackBtn}>Good</button>
             <button onClick={() => onLeaveFeedback("neutral")} className={css.feedbackBtn}>Neutral</button>
             <button onClick={() => onLeaveFeedback("bad")} className={css.feedbackBtn}>Bad</button>
             </>
    )
}
export default FeedbackOptions;