import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import UsersList from '../../components/UsersList/UsersList';

import * as userActions from '../../actions/userActions';

const Main = props => {
  const { users, showUsers } = props;
  showUsers();
  return (
    <div>
      <UsersList list={users} />;
    </div>
  );
}

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
)(Main);
