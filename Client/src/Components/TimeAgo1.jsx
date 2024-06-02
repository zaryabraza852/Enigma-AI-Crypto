import React, { useState, useEffect } from 'react';
import moment from 'moment';

const TimeAgo = ({ timestamp }) => {
  const [timeRemaining, setTimeRemaining] = useState('');

  useEffect(() => {
    // Add 7 days to the provided timestamp
    const extendedTimestamp = moment(timestamp).add(7, 'days');

    const updateCountdown = () => {
      const now = moment();
      const end = moment(extendedTimestamp);
      const duration = moment.duration(end.diff(now));
      
      const days = duration.days();
      const hours = duration.hours();
      const minutes = duration.minutes();
      const seconds = duration.seconds();
      
      const countdownString = `${days}d ${hours}h ${minutes}m ${seconds}s`;
      setTimeRemaining(countdownString);
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, [timestamp]);

  return <span>{timeRemaining}</span>;
};

export default TimeAgo;
