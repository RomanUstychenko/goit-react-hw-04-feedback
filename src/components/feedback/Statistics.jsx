import React from 'react';
import css from "./Feedback.module.css";

export default function Statistics ({good, neutral, bad}) {
return (
    <ul className={css.statisticsList}>
    <li className={css.statisticsItem}>Good: {good}</li>
<li className={css.statisticsItem}>Neutral: {neutral}</li>
    <li className={css.statisticsItem}>Bad: {bad}</li>
</ul>
)
}