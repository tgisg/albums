/* eslint-disable */

import React, { Component } from 'react';
import {StyleSheet,
        Text,
        View
        } from 'react-native';
import FBSDK, { LoginButton } from 'react-native-fbsdk';

// const onLoginFinished = (error, result) => {
//   if (error) {
//     alert("login has error: " + result.error);
//   } else if (result.isCancelled) {
//     alert("login is cancelled.");
//   } else {
//     alert("login has finished with permissions: " + result.grantedPermissions)
//   }
// };

class SignIn extends Component {
  render() {
    return (
      <View style={styles.container}>
        <LoginButton
          publishPermissions={["publish_actions"]}
          onLoginFinished={
            (error, result) => {
              if (error) {
                alert("Login failed with error: " + result.error);
              } else if (result.isCancelled) {
                alert("Login was cancelled");
              } else {
                alert("Login was successful with permissions: " + result.grantedPermissions)
              }
            }
          }
          onLogoutFinished={() => alert("User logged out")}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

export default SignIn;
