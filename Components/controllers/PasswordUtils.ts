import * as yup from 'yup';

class PasswordUtils {
  // Define password schema validation using Yup
  passwordShema = yup.object().shape({
    passwordLength: yup
      .number()
      .min(4, 'Should be greater than or equal to 4')
      .max(10, 'Should be smaller than or equal to 10')
      .required('Password Length is required'),
  });

  // Create a random password based on provided characters and length
  createPassword = (characters: string, passwordLength: number) => {
    let result = '';
    for (let i = 0; i < passwordLength; i++) {
      const characterIndex = Math.round(Math.random() * characters.length);
      result += characters.charAt(characterIndex);
    }
    return result;
  };

  // Create a string of characters based on provided options
  createCharacterList = (
    uppercase: boolean,
    lowercase: boolean,
    numbers: boolean,
    symbols: boolean,
  ): string => {
    let characterList = '';

    // Define available character sets
    const upperCaseChars: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCaseChars: string = 'abcdefghijklmnopqrstuvwxyz';
    const digitChars: string = '0123456789';
    const specialChars: string = '!@#$%^&*()_+~`|}{[]:;?><,./-=\\';

    // Add selected character sets to list
    if (uppercase) {
      characterList += upperCaseChars;
    }
    if (lowercase) {
      characterList += lowerCaseChars;
    }
    if (numbers) {
      characterList += digitChars;
    }
    if (symbols) {
      characterList += specialChars;
    }

    return characterList;
  };
}

export default PasswordUtils;
