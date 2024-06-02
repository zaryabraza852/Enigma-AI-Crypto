import React, { useState, useEffect } from 'react';
import moment from 'moment';

const TimeAgo = ({ timestamp }) => {
  const [timeAgoString, setTimeAgoString] = useState('');

  useEffect(() => {
    const updateAgoString = () => {
      const now = moment();
      const then = moment(timestamp);
      const daysAgo = now.diff(then, 'days');
      
      let agoString = '';
      switch (daysAgo) {
        case 0:
          agoString = '1 day ago';
          break;
        case 1:
          agoString = '1 day ago';
          break;
        case 2:
          agoString = '2 days ago';
          break;
        case 3:
          agoString = '3 days ago';
          break;
        case 4:
          agoString = '4 days ago';
          break;
        case 5:
          agoString = '5 days ago';
          break;
        case 6:
          agoString = '6 days ago';
          break;
        default:
          agoString = then.format('MMMM Do YYYY'); // fallback to the date format
      }
      
      setTimeAgoString(agoString);
    };

    updateAgoString();
  }, [timestamp]);

  return <span>{timeAgoString}</span>;
};

export default TimeAgo;
