import React from 'react';
import User from '../User/User';

import styles from './UsersList.module.css';

const UsersList = ({ list }) => {
  return (
    <div className={styles.UsersList}>
      {list.map((element, index) => {
        return (
          <div key={index} className={styles.items}>
            <User
              id={index}
              name={`${element.name.first} ${element.name.last}`}
              city={element.location.city}
              state={element.location.state}
              picture={element.picture.medium}
            />
          </div>
        );
      })}
    </div>
  );
};

export default UsersList;
