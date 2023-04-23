import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const GeneratedPasswordCard = (props: {password: string}) => {
  return (
    <View style={(styles.card, styles.cardElevated)}>
      <Text style={styles.subTitle}>Result:</Text>
      <Text style={styles.description}>Long Press to copy</Text>
      <Text selectable style={styles.generatedPassword}>
        {props.password}
      </Text>
    </View>
  );
};

export default GeneratedPasswordCard;

const styles = StyleSheet.create({
  subTitle: {
    fontSize: 26,
    fontWeight: '600',
    marginBottom: 2,
  },
  description: {
    color: '#758283',
    marginBottom: 8,
  },
  card: {
    padding: 12,
    borderRadius: 6,
    marginHorizontal: 12,
  },
  cardElevated: {
    backgroundColor: '#ffffff',
    elevation: 1,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#ff000',
    shadowOpacity: 0.2,
    shadowRadius: 20,
    padding: 10,
  },
  generatedPassword: {
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 12,
    color: '#000',
  },
});
