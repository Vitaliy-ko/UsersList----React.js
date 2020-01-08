import React from 'react';
import styles from './Month.module.css';

const month = props => {
  const { month, monthsData, mouseOver, mouseLeave } = props;
  const usersCount = monthsData[month].length;
  const usersCountStyle = usersCount => {
    const userStyle = new Map();
    userStyle.set(usersCount >= 0, styles.Few);
    userStyle.set(usersCount >= 3, styles.Average);
    userStyle.set(usersCount >= 7, styles.Plenty);
    userStyle.set(usersCount >= 11, styles.VeryNumerous);
    return userStyle.get(true);
  };

  return (
    <li
      className={[styles.Month, usersCountStyle(usersCount)].join(' ')}
      onMouseOver={() => mouseOver(month)}
      onMouseLeave={mouseLeave}
      key={monthsData[month][0].id}
    >
      {month}: {usersCount}
    </li>
  );
};

export default month;
