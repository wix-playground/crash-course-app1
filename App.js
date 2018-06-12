import React from 'react';
import { Navigation } from 'react-native-navigation';
import { StyleSheet } from 'react-native';
import { Text, View, TouchableOpacity } from 'react-native-ui-lib';

export default class App extends React.Component {
  onPushScreen = async () => {
    await Navigation.push('TEST', {
      component: {
        name: 'mobilecrashcoursedemo1-another'
      }
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text red30>Shake your phone to open the developer menu.</Text>
        <TouchableOpacity onPress={this.onPushScreen}>
          <Text blue30>RNNv2</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
