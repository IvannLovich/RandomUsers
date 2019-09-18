import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as userActions from '../../actions/userActions';

import styles from './Details.module.css';

const Details = props => {
  const mapResult = () => {
    const { showUsers, users } = props;
    const { id } = props.match.params;
    showUsers();
    return users.us.map((element, index) => {
      if (index == id) {
        return (
          <div key={index} className={styles.detailsContainer}>
            <img src={element.picture.large} alt={element.picture.large} height="80" width="80" />
            <div>
              Username: <strong>{element.login.username}</strong>
            </div>
            <div>
              Name: <strong>{`${element.name.first} ${element.name.last}`}</strong>
            </div>
            <div>
              Email: <strong>{element.email}</strong>
            </div>
          </div>
        );
      }
    });
  };

  return <div>{mapResult()}</div>;
};

const mapStateToProps = state => {
  return {
    users: state.allUsers,
  };
};

const mapDispachToProps = dispatch => {
  return bindActionCreators({ ...userActions }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispachToProps
)(Details);
