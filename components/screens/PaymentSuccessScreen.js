import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const PaymentSuccessScreen = ({ navigation, route }) => {
  const { cartItems, totalPrice } = route.params;
  const handleContinueShopping = () => {
    // Tutaj możesz dodać kod, który umożliwi użytkownikowi kontynuowanie zakupów lub przekierowanie go do innej części aplikacji
    navigation.navigate('AccountScreen', { cartItems, totalPrice });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Płatność zakończona pomyślnie!</Text>
      <Text style={styles.description}>
        Dziękujemy za złożenie zamówienia. Twoja płatność została pomyślnie przetworzona.
      </Text>
      <TouchableOpacity style={styles.button} onPress={handleContinueShopping}>
        <Text style={styles.buttonText}>Kontynuuj zakupy</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PaymentSuccessScreen;

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
