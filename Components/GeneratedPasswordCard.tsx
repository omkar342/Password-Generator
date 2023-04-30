import {Text, View} from 'react-native';
import React from 'react';
import styles from './Styling/GeneratePasswordCardStyles';

const GeneratedPasswordCard = (props: {password: string}) => {
  return (
    <View style={(styles.card, styles.cardElevated)}>
      <Text style={styles.subTitle}>Result:</Text>
      <Text selectable style={styles.generatedPassword}>
        {props.password}
      </Text>
      <Text style={styles.description}>Long Press to copy</Text>
    </View>
  );
};

export default GeneratedPasswordCard;
