import { Component} from "react";
import SectionTitle from "./SectionTitle/SectionTitle";
import Statistics from "./Statistics/Statistics"
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions"
import Notification from "./Notification/Notification"

export default class Feed extends Component  {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
      }
      countTotalFeedback() {
        const {good, neutral, bad} = this.state;
        return (good + neutral + bad);
      }
      countPositiveFeedbackPercentage() {
        const total = this.countTotalFeedback()
            if (!total) {
                return 0;
            }
        const {good} = this.state;
        const result = (good / total) * 100;
        return Number(result.toFixed(0));
      }
      onLeaveFeedback = (propertyName) => {
        const target = propertyName.currentTarget.name;
            this.setState((prev) => {
            const value = prev[target];
            return {
                [target]: value + 1
            }
        })
      }
    render () {
        const {good, neutral, bad} = this.state;
        const total = this.countTotalFeedback();
        const percentage = this.countPositiveFeedbackPercentage();
        const btn = Object.keys(this.state);
    return (
        <div>
            <SectionTitle 
            title="Please leave feedback">
            <FeedbackOptions 
            options={btn}
            onLeaveFeedback={this.onLeaveFeedback}
            />
            </SectionTitle>
            <SectionTitle 
            title="Statistics">
                {!total ? 
            < Notification 
                message={"There is no feedback"}
            /> : 
            <Statistics 
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            percentage={percentage}
            />
        }
            </SectionTitle>
        </div>
    )
}
}