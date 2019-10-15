import React from 'react';
import {StyleSheet, Image, View} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const App = () => (
  <View style={styles.app}>
    <Image style={styles.img} source={require('./spinner.gif')} />
  </View>
);

const styles = StyleSheet.create({
  app: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.lighter,
  },
  lottie: {
    flex: 1,
  },
  img: {
    width: 30,
    height: 30,
},
});

export default App;
