import React from 'react';
import styles from './Month.module.css';
import UsersContext from '../../../context/UsersContext';

const month = props => (
  <UsersContext.Consumer>
    {({ monthsData, mouseOver, mouseLeave }) => {
      const { month } = props;
      const usersCount = monthsData[month].length;

      const usersCountStyle = usersCount => {
        const monthStyle = new Map();
        monthStyle.set(usersCount >= 0, styles.Few);
        monthStyle.set(usersCount >= 3, styles.Average);
        monthStyle.set(usersCount >= 7, styles.Plenty);
        monthStyle.set(usersCount >= 11, styles.VeryNumerous);
        return monthStyle.get(true);
      };

      return (
        <li
          className={[styles.Month, usersCountStyle(usersCount)].join(' ')}
          onMouseOver={() => mouseOver(month)}
          onMouseLeave={mouseLeave}
        >
          {month}: {usersCount}
        </li>
      );
    }}
  </UsersContext.Consumer>
);

export default month;
