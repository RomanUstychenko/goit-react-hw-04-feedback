import React from 'react';
import PropTypes from 'prop-types'
import css from "./Notification.module.css";

export default function Notification ( {message} ) {
    return (
        <p className={css.notificationMessage}>{message}</p>
    )
  }

  Notification.propTypes = {
    message: PropTypes.string.isRequired,
   
};

