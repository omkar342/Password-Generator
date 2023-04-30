import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import CardComponent from './Components/CardComponent';

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar barStyle="light-content" backgroundColor={Colors.black} />
      <View style={styles.viewStyles}>
        <Text style={styles.textStyle}>Password Generator</Text>
        <CardComponent />
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 32,
    fontWeight: '600',
    marginBottom: 15,
  },
  viewStyles: {
    alignItems: 'center',
    backgroundColor: Colors.grey,
    height: '100%',
    justifyContent: 'center',
  },
});
