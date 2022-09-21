import { Component} from "react"
import Block from "./Block"
import css from "./Feedback.module.css"




export default class Feedback extends Component  {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
      }

      leaveVote = (propertyName) => {
        this.setState((prev) => {
            const value = prev[propertyName];
            return {
                [propertyName]: value + 1
            }
        })
      }
    render () {
        const {good, neutral, bad} = this.state;
    return (
        <div>
            <Block title="Please leave feedback">
            <button onClick={() => this.leaveVote("good")} className={css.feedbackBtn}>Good</button>
             <button onClick={() => this.leaveVote("neutral")} className={css.feedbackBtn}>Neutral</button>
             <button onClick={() => this.leaveVote("bad")} className={css.feedbackBtn}>Bad</button>
            </Block>

            <Block title="Statistics">
            <ul className={css.statisticsList}>
                 <li className={css.statisticsItem}>Good: {good}</li>
             <li className={css.statisticsItem}>Neutral: {neutral}</li>
                 <li className={css.statisticsItem}>Bad: {bad}</li>
             </ul>
            </Block>
        </div>
        
        // <div className={css.feedbackList}>
        //     <p className={css.feedbackTitle}>Please leave feedback</p>
        //     <button onClick={() => this.leaveVote("good")} className={css.feedbackBtn}>Good</button>
        //     <button onClick={() => this.leaveVote("neutral")} className={css.feedbackBtn}>Neutral</button>
        //     <button onClick={() => this.leaveVote("bad")} className={css.feedbackBtn}>Bad</button>
        //     <p className={css.statisticsTitle}>Statistics</p>
        //     <ul className={css.statisticsList}>
        //         <li className={css.statisticsItem}>Good: {good}</li>
        //         <li className={css.statisticsItem}>Neutral: {neutral}</li>
        //         <li className={css.statisticsItem}>Bad: {bad}</li>
        //     </ul>
        // </div>
    )
}
}
// 2.15