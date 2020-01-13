import React from 'react';
import Month from './Month/Month';
import styles from './MonthList.module.css';
import UsersContext from './../../context/UsersContext';

const monthList = props => (
  <UsersContext.Consumer>
    {({monthsData, error}) => {
      let months = null;
      if (!error) {
        months = <p className={styles.MonthsList}>Loading...</p>;
      } else {
        months = <p className={styles.MonthsList}>Data can't be loaded!</p>;
      }

      if (Object.entries(monthsData).length !== 0) {
        months = (
          <ul className={styles.MonthsList}>
            {Object.keys(monthsData).map(month => (
              <Month 
                month={month} 
                key={monthsData[month][0].id} 
              />
            ))}
          </ul>
        );
      }
      return months;
    }}
  </UsersContext.Consumer>
);

export default monthList;
