import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import {useState} from 'react';
import React from 'react';

import {Formik} from 'formik';

import PasswordUtils from '../controllers/PasswordUtils';

import styles from '../Styling/CardComponents';

import BouncyCheckbox from 'react-native-bouncy-checkbox';
import GeneratedPasswordCard from '../GeneratedPasswordCard';

const passwordUtility = new PasswordUtils();

const FormComponent = () => {
  const [password, setPassword] = useState('');
  const [isPasswordGenerated, setIsPasswordGenerated] = useState(false);
  const [lowercase, setLowercase] = useState(true);
  const [uppercase, setUppercase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);

  const generatePasswordString = (passwordLength: number) => {
    const characterList = passwordUtility.createCharacterList(
      uppercase,
      lowercase,
      numbers,
      symbols,
    );
    const passwordResult = passwordUtility.createPassword(
      characterList,
      passwordLength,
    );

    setPassword(passwordResult);
    setIsPasswordGenerated(true);
  };

  const resetPasswordState = () => {
    setPassword('');
    setIsPasswordGenerated(false);
    setLowercase(true);
    setUppercase(false);
    setNumbers(false);
    setSymbols(false);
  };
  return (
    <View>
      <Formik
        initialValues={{passwordLength: ''}}
        validationSchema={passwordUtility.passwordShema}
        onSubmit={values => {
          generatePasswordString(+values.passwordLength);
        }}>
        {({
          values,
          errors,
          touched,
          isValid,
          handleChange,
          handleSubmit,
          handleReset,
        }) => (
          <>
            <View style={styles.inputWrapper}>
              <View style={styles.inputColumn}>
                <Text style={styles.heading}>Password Length</Text>
                {touched.passwordLength && errors.passwordLength && (
                  <Text style={styles.errorText}>{errors.passwordLength}</Text>
                )}
              </View>
              <TextInput
                style={styles.inputStyle}
                value={values.passwordLength}
                onChangeText={handleChange('passwordLength')}
                placeholder="Ex. 8"
                keyboardType="numeric"
              />
            </View>
            <View style={styles.inputWrapper}>
              <Text style={styles.heading}>Include Lowercase</Text>
              <BouncyCheckbox
                disableBuiltInState
                isChecked={lowercase}
                onPress={() => {
                  setLowercase(!lowercase);
                }}
                fillColor="#29ABB7"
              />
            </View>
            <View style={styles.inputWrapper}>
              <Text style={styles.heading}>Include Uppercase</Text>
              <BouncyCheckbox
                disableBuiltInState
                isChecked={uppercase}
                onPress={() => {
                  setUppercase(!uppercase);
                }}
                fillColor="#C9A0DC"
              />
            </View>

            <View style={styles.inputWrapper}>
              <Text style={styles.heading}>Include Numbers</Text>
              <BouncyCheckbox
                disableBuiltInState
                isChecked={numbers}
                onPress={() => {
                  setNumbers(!numbers);
                }}
                fillColor="#FED85D"
              />
            </View>

            <View style={styles.inputWrapper}>
              <Text style={styles.heading}>Include Symbols</Text>
              <BouncyCheckbox
                disableBuiltInState
                isChecked={symbols}
                onPress={() => {
                  setSymbols(!symbols);
                }}
                fillColor="#FC80A5"
              />
            </View>

            <View style={styles.formActions}>
              <TouchableOpacity
                disabled={!isValid}
                style={styles.primaryBtn}
                onPress={() => {
                  handleSubmit();
                }}>
                <Text style={styles.primaryBtnTxt}>Generate Password</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.secondaryBtn}
                onPress={() => {
                  handleReset();
                  resetPasswordState();
                }}>
                <Text style={styles.secondaryBtnTxt}>Reset Password</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </Formik>
      <View style={{marginTop: 30}}>
        {isPasswordGenerated ? (
          <GeneratedPasswordCard password={password} />
        ) : null}
      </View>
    </View>
  );
};

export default FormComponent;
