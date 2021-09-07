/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchUsers} from '../redux';
import {View, Text} from 'react-native';

function UsersContainer({userData, fetchUsers}) {
  useEffect(() => {
    fetchUsers();
  });
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'red',
      }}>
      <Text>Users List</Text>
      <View>
        {userData.users.map(user => (
          <Text key={user.id}>{user.name}</Text>
        ))}
      </View>
    </View>
  );
}

const mapStateToProps = state => {
  return {
    userData: state.user,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
