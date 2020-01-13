import React from 'react';
import styles from './UsersList.module.css';
import UsersContext from './../../context/UsersContext';

const usersList = props => (
  <UsersContext.Consumer>
    {({ activeList }) => {
      if (!activeList) return null;
      return (
        <ol className={styles.Users}>
          {activeList.map(user => (
            <li key={user.id}>First Name: {user.firstName}</li>
          ))}
        </ol>
      );
    }}
  </UsersContext.Consumer>
);

export default usersList;
