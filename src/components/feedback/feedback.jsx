import css from "./Feedback.module.css"


// state = {
//   good: 0,
//   neutral: 0,
//   bad: 0
// }

export const Feedback = () => {
    return (
        <div className={css.feedbackList}>
            <p className={css.feedbackTitle}>Please leave feedback</p>
            <button>Good</button>
            <button>Neutral</button>
            <button>Bad</button>
            <p>Statistics</p>
            <ul>
                <li>Good:</li>
                <li>Neutral:</li>
                <li>Bad:</li>
            </ul>
        </div>
    )
}