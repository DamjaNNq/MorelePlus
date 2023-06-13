import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const PaymentFailureScreen = ({ navigation }) => {
  const handleRetryPayment = () => {
    navigation.navigate('PaymentScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Płatność nieudana</Text>
      <Text style={styles.description}>Wystąpił problem podczas przetwarzania płatności.</Text>
      <TouchableOpacity style={styles.button} onPress={handleRetryPayment}>
        <Text style={styles.buttonText}>Spróbuj ponownie</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PaymentFailureScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  description: {
    fontSize: 18,
    marginBottom: 30,
    textAlign: 'center',
    marginHorizontal: 30,
  },
  button: {
    backgroundColor: '#FF513C',
    borderRadius: 10,
    padding: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
