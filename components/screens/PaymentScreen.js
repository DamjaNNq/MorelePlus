import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

const PaymentScreen = ({ navigation,route  }) => {
  const [blikCode, setBlikCode] = useState('');
  const { cartItems, totalPrice } = route.params;
  const handlePaymentWithBLIK = () => {
    // Wywołaj API lub wykonaj inne operacje związane z płatnością BLIK
    // Sprawdź poprawność kodu BLIK i dokonaj płatności
    if (blikCode === '123456') {
      // Płatność zakończona sukcesem
      navigation.navigate('PaymentSuccessScreen', { cartItems, totalPrice });
    } else {
      // Płatność nieudana
      navigation.navigate('PaymentFailureScreen');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Podaj kod BLIK</Text>
      <TextInput
        style={styles.input}
        placeholder="Wprowadź kod BLIK"
        onChangeText={setBlikCode}
        value={blikCode}
      />
      <TouchableOpacity style={styles.button} onPress={handlePaymentWithBLIK}>
        <Text style={styles.buttonText}>Potwierdź płatność</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PaymentScreen;

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
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
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
