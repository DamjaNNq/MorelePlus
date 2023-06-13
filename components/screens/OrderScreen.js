import React from 'react';
import { View, Text } from 'react-native';

const OrderScreen = ({route }) => {
  const { cartItems, totalPrice } = route.params;

  return (
    <View>
      <Text>Twoje zamówienie:</Text>
      {cartItems.map((item) => (
        <Text key={item.id}>{item.name} - {item.price} zł</Text>
      ))}
      <Text>Suma: {totalPrice.toFixed(2)} zł</Text>
    </View>
  );
};

export default OrderScreen;