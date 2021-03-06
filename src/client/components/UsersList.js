import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';

class UsersList extends Component {
  componentDidMount() {
    console.log('componentMount');
    console.log(this.props);
    this.props.fetchUsers();
  }

  renderUsers() {
    return this.props.users.map(user=> {
    return <li key={user.id}>{user.name}</li>
    })
  }

  render() {
    return (
      <div>
        Here's a big list of users:
        <lu>{this.renderUsers()}</lu>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { users: state.users };
}

function loadData(store) {
  return store.dispatch(fetchUsers());
}

export { loadData };

export default connect(mapStateToProps, { fetchUsers })(UsersList);