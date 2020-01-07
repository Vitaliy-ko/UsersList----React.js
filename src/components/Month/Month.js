import React from 'react';
import styles from './Month.module.css';

const month = props => {
  const { month, monthsData, mouseOver, mouseLeave } = props;
  let userCountStyle;
  if (monthsData[month].length <= 2) {
    userCountStyle = styles.Few;
  } else if (monthsData[month].length <= 6) {
    userCountStyle = styles.Average;
  } else if (monthsData[month].length <= 10) {
    userCountStyle = styles.Plenty;
  }
  if (monthsData[month].length >= 11) {
    userCountStyle = styles.VeryNumerous;
  }

  return (
    <li
      className={[styles.Month, userCountStyle].join(' ')}
      onMouseOver={() => mouseOver(month)}
      onMouseLeave={mouseLeave}
      key={monthsData[month][0].id}
    >
      {month}: {monthsData[month].length}
    </li>
  );
};

export default month;
