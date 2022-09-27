import React from 'react';
import css from "./Statistics.module.css";
import PropTypes from 'prop-types'

export default function Statistics ({good, neutral, bad, total, percentage}) {
return (
    <>
    <ul className={css.statisticsList}>
        <li className={css.statisticsItem}>Good: {good}</li>
        <li className={css.statisticsItem}>Neutral: {neutral}</li>
        <li className={css.statisticsItem}>Bad: {bad}</li>
    </ul>
    <ul>
        <li className={css.statisticsItem}>Total: {total}</li>
        <li className={css.statisticsItem}>PositiveFeedback: {percentage} %</li>
    </ul>
    </>
    
)
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    percentage: PropTypes.number.isRequired,
};