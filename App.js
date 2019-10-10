import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import LottieView from 'lottie-react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const App = () => (
  <View style={styles.app}>
    <Text>Hello</Text>
    <LottieView 
      style={styles.lottie}
      source={require('./animation.json')}
      autoPlay
      loop
    />
  </View>
);

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: Colors.lighter,
  },
  lottie: {
    flex: 1,
  },
});

export default App;
