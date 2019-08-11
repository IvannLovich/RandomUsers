import React, { Component } from 'react';

import styles from './Details.module.css';

class Details extends Component {
  state = {
    us: []
  };
  componentDidMount() {
    fetch(`https://randomuser.me/api/?seed=myseed&results=50`)
      .then(res => res.json())
      .then(single => {
        const { results } = single;
        this.setState({ us: results });
      });
  }

  mapResult = () => {
    const { us } = this.state;
    const { id } = this.props.match.params;
    return us.map((element, index) => {
      if (index == id) {
        return (
          <div key={index} className={styles.detailsContainer}>
            <img
              src={element.picture.large}
              alt={element.picture.large}
              height="80"
              width="80"
            />
            <div>
              Username: <strong>{element.login.username}</strong>
            </div>
            <div>
              Name:{' '}
              <strong>{`${element.name.first} ${element.name.last}`}</strong>
            </div>
            <div>
              Email: <strong>{element.email}</strong>
            </div>
          </div>
        );
      }
    });
  };

  render() {
    return <div>{this.mapResult()}</div>;
  }
}

export default Details;
