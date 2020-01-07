import React from 'react';
import styles from './UsersList.module.css';

const usersList = props => {
  if (!props.activeList) return null;
  return (
    <ol className={styles.Users}>
      {props.activeList.map(item => (
        <li>First Name: {item.firstName}</li>
      ))}
    </ol>
  );
};

export default usersList;
