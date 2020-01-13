import React from 'react';
import styles from './UsersList.module.scss';
import UsersContext from './../../context/UsersContext';

const usersList = props => (
  <UsersContext.Consumer>
    {({ activeList, activeListStyle }) => {
      if (!activeList) return null;
      return (
        <div className={styles.container}>

        <ul className={styles.UsersList}>
          {activeList.map((user, index) => (
            <li className={styles.User} key={user.id}>
              <span className={[styles.User__Number, styles[activeListStyle]].join(' ')}>{index + 1}</span>{' '}
              {user.firstName + ' ' + user.lastName}
            </li>
          ))}
        </ul>
        </div>

      );
    }}
  </UsersContext.Consumer>
);

export default usersList;
