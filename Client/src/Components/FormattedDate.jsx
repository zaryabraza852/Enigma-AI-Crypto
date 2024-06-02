import React from 'react';
import moment from 'moment';

const FormattedDate = ({ timestamp }) => {
  const formattedDate = moment(timestamp).format('MMMM D, YYYY');

  return <span>{formattedDate}</span>;
};

export default FormattedDate;
