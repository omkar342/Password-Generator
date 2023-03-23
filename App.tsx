import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Car2 from './Components/Car2';

const App = () => {
  console.log('Omkar1');
  return (
    <SafeAreaView>
      <StatusBar barStyle="light-content" backgroundColor={Colors.black} />
      <View style={styles.viewStyles}>
        <Text style={styles.textStyle}>
          Hi, Omkar Jadhav here, I am building a Password Generator App using
          React-Native.
        </Text>
        <Car2 />
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  textStyle: {
    color: Colors.white,
    fontSize: 20,
    padding: 10,
    textAlign: 'center',
  },
  viewStyles: {
    alignItems: 'center',
    backgroundColor: Colors.black,
    height: '100%',
    justifyContent: 'center',
  },
});
