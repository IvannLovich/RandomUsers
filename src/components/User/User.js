import React from 'react';
import { Link } from 'react-router-dom';

// import styles from './User.module.css';

const Users = ({ id, name, city, state, picture }) => {
  return (
    <div className="card">
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <figure className="image is-48x48">
              <Link to={`/${id}`}>
                <img src={picture} alt={picture} />
              </Link>
            </figure>
          </div>
          <div className="media-content">
            <p className="title is-4">
              Full name: <strong>{name}</strong>
            </p>
            <p className="title is-4">
              City: <strong>{city}</strong>
            </p>
            <p className="title is-4">
              Country: <strong>{state}</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
