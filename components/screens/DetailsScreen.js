import React, { useState,createContext } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import CartPage from './cartPage';

const CartContext = createContext();


export const handleDeleteFromCart = () => {
  const j = cartItems.findIndex(x => x.id === item.id);
  window.cartItems.pop(item);
  console.log("deleted");
};

const DetailsScreen = ({ route,navigation }) => {
  const { item } = route.params;
  const [cartItems, setCartItems] = useState([item]);
 console.log(item);

  async function handleAddToCart() {
    const response = await fetch('https://moreleplus-default-rtdb.firebaseio.com/cart/.json?auth=lu3HGhtP4w4qmCKxlpVKUWxJpSA13R7skZqpzsVR', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(item),
    });
    if(!response.ok) {

    }
    navigation.navigate('CartPage', { cartItems }); // przekazywanie wartości cartItems
};
  // const handleAddToCart = () => {
  //   console.log(cartItems);
  //   const i = cartItems.findIndex(x => x.id === item.id);
  //   console.log(i);

  //   if (i === 0) {
  //     if (Array.isArray(window.cartItems)) {

  //     }
  //     else {
  //       window.cartItems = new Array();
  //     }
  //     setCartItems(cartItems => [...cartItems, item]);
  //     window.cartItems.push(item);
  //     console.log('test1');
  //   }

  //   //setTimeout(() => { console.log(cartItems); window.cartItems = cartItems }, 100);

  //   navigation.navigate('CartPage', { cartItems }); // przekazywanie wartości cartItems

  // };

  
  <CartPage cartItems={cartItems} navigation={navigation} />
  if (!item) {
    return <Text>Loading...</Text>;
  }

  return (

    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Feather name="chevron-left" size={30} />
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image
          source={{ uri: item.image_url }}
          style={styles.image}
        />
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.description}>{item.description}</Text>

        <Text style={styles.price}>Cena {item.price} zł</Text>

      </ScrollView>

      <TouchableOpacity
        style={styles.button}
        onPress={handleAddToCart}
      >

        <Text style={styles.buttonText}>Dodaj do koszyka</Text>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backButton: {
    position: 'absolute',
    top: 35,
    left: 0,
    zIndex: 1,
  },
  image: {
    flex: 1,
    width: '90%',
    height: '90%',
    alignSelf: 'center',
    aspectRatio: 1,
    resizeMode: 'center',
  },
  name: {
    fontSize: 20,
    marginLeft: 10,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    marginLeft: 10,
    marginBottom: 10,
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,

  },
  button: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#FF513C',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    height: 50,
    marginBottom: 40,
    marginHorizontal: 10,
  },
  buttonText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 20,
  },
});

export default DetailsScreen;
