import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  subTitle: {
    fontSize: 26,
    fontWeight: '600',
    marginBottom: 2,
    color: '#000',
  },
  description: {
    color: '#758283',
    marginBottom: 8,
    textAlign: 'center',
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

export default styles;
