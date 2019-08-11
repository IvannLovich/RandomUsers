import React, { Component } from 'react';

import UsersList from '../../components/UsersList/UsersList';

class Main extends Component {
  state = {
    users: []
  };

  componentDidMount() {
    fetch('https://randomuser.me/api/?seed=myseed&results=50')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        const { results } = data;

        this.setState({ users: results });
      });
  }
  render() {
    return (
      <div>
        <UsersList list={this.state.users} />;
      </div>
    );
  }
}

export default Main;
