import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar barStyle="light-content" backgroundColor={Colors.black} />
      <View style={styles.viewStyles}>
        <Text style={styles.textStyle}>
          Hi, Omkar Jadhav here, I am building a Password Generator App using
          React-Native.
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  viewStyles: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    backgroundColor: 'black',
  },
  textStyle: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    padding: 10,
  },
});
