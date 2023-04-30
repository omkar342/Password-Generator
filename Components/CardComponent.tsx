import {SafeAreaView, ScrollView, View} from 'react-native'; // eslint-disable-line import/extensions
import React, {useState} from 'react';

import styles from './Styling/CardComponents';

import FormComponent from './FormComponents/FormComponent';

const CardComponent = () => {
  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <SafeAreaView style={styles.appContainer}>
        <View style={styles.formContainer}>
          <FormComponent></FormComponent>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default CardComponent;
