// import { Component} from "react";
import SectionTitle from "./SectionTitle/SectionTitle";
import Statistics from "./Statistics/Statistics"
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions"
import Notification from "./Notification/Notification"
import { useState } from "react";
// import React from 'react'

export const Feed = () => {

    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const optionsFeed = { good, neutral, bad };

   const countTotalFeedback = () => {
        return good + neutral + bad;
      }
     const countPositiveFeedbackPercentage = () => { 
            if (!countTotalFeedback()) {
                return 0;
            }
        const result = (good / countTotalFeedback()) * 100;
        return Number(result.toFixed(0));
      }
    const onLeaveFeedback = (propertyName) => {
        switch(propertyName) {
            case "good":
            return setGood((prev) => prev + 1);
            case "neutral":
            return setNeutral((prev) => prev + 1);
            case "bad":
            return setBad((prev) => prev + 1);
            default:
            return;
        }
      }
      
      const btn = Object.keys(optionsFeed);

    return (
        <div>
            <SectionTitle 
            title="Please leave feedback">
            <FeedbackOptions 
            options={btn}
            onLeaveFeedback={onLeaveFeedback}
            />
            </SectionTitle>
            <SectionTitle 
            title="Statistics">
                 {!countTotalFeedback() ? 
            < Notification 
                message={"There is no feedback"}
            /> : 
            <Statistics 
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            percentage={countPositiveFeedbackPercentage()}
            />
        }
            </SectionTitle>
        </div>
    )
}