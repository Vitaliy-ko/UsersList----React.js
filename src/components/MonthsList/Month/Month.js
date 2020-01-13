import React from 'react';
import styles from './Month.module.scss';
import UsersContext from '../../../context/UsersContext';

const month = props => (
  <UsersContext.Consumer>
    {({ monthsData, mouseOver, mouseLeave }) => {
      const { month } = props;
      const usersCount = monthsData[month].length;

      const usersCountStyle = usersCount => {
        const monthStyle = new Map();
        monthStyle.set(usersCount >= 0, 'Few');
        monthStyle.set(usersCount >= 3, 'Average');
        monthStyle.set(usersCount >= 7, 'Plenty');
        monthStyle.set(usersCount >= 11, 'VeryNumerous');
        return monthStyle.get(true);
      };

      const activeListStyle = usersCountStyle(usersCount);

      return (
        <li
          className={[styles.Month, styles[activeListStyle]].join(' ')}
          onMouseOver={() => mouseOver(month, activeListStyle)}
          onMouseLeave={mouseLeave}
        >
          {month}: {usersCount}
        </li>
      );
    }}
  </UsersContext.Consumer>
);

export default month;
