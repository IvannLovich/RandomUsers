import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import UsersList from '../../components/UsersList/UsersList';

import * as userActions from '../../actions/userActions';

// eslint-disable-next-line react/prefer-stateless-function
class Main extends Component {
  componentDidMount() {
    this.props.showUsers();
  }
  // renderUsers = () => {
  //   const { users } = this.props;
  //   console.log(users);
  //   return users.map(element => {
  //     return (
  //       <div>
  //         <span>{`${element.name.first} ${element.name.last}`}</span>
  //         <span>{element.location.city}</span>
  //         <span>{element.location.state}</span>
  //         <span>{element.picture.medium}</span>
  //       </div>
  //     );
  //   });
  // };

  render() {
    const { users } = this.props;
    return (
      <div>
        <UsersList list={users} />;
      </div>
    );
  }
}

// {this.renderUsers()}
const mapStateToProps = state => {
  return {
    users: state.allUsers
  };
};

const mapDispachToProps = dispatch => {
  return bindActionCreators({ ...userActions }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispachToProps
)(Main);
