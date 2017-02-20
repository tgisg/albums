/* eslint-disable */

import React, { Component } from 'react';
import {StyleSheet,
        Text,
        View
        } from 'react-native';
const FBSDK = require('react-native-fbsdk');
const {
  LoginButton,
  AccessToken
} = FBSDK;
// import FBSDK, { LoginButton, AccessToken } from 'react-native-fbsdk';

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
          publishPermissions={["public_profile"]}
          onLoginFinished={
            (error, result) => {
              if (error) {
                alert("Login failed with error: " + result.error);
              } else if (result.isCancelled) {
                alert("Login was cancelled");
              } else {
                AccessToken.getCurrentAccessToken().then(
                  (data) => {
                    alert("Login was successful with permissions: " + result.grantedPermissions + " " + "Your access token is: " + data.accessToken.toString())
                  }
                )
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
