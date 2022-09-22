import { Component} from "react";
import SectionTitle from "./SectionTitle";
import Statistics from "./Statistics"
import FeedbackOptions from "./FeedbackOptions"
// import css from "./Feedback.module.css";

export default class Feed extends Component  {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
      }

      onLeaveFeedback = (propertyName) => {
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
            <SectionTitle 
            title="Please leave feedback">
            <FeedbackOptions 
            onLeaveFeedback={this.onLeaveFeedback}
            />
            </SectionTitle>
            <SectionTitle 
            title="Statistics">
            <Statistics 
            good={good}
            neutral={neutral}
            bad={bad}
            />
            </SectionTitle>
        </div>
    )
}
}