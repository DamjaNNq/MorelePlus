import React, { useState, useEffect, useCallback } from 'react';
import { Text, View, TextInput, StyleSheet, TouchableOpacity, Image, Pressable } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import axios, { isCancel, AxiosError } from 'axios';


import { ScrollView } from 'react-native-gesture-handler';
import { id } from 'deprecated-react-native-prop-types/DeprecatedTextPropTypes';




const useUpdate = () => {
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    setUpdate(true);
  }, []);

  return update;
};

const CartPage = ({ navigation }) => {
  
  //const { item } = route.params;
  const [cartItems, setCartItems] = useState([]);
  const fetchCart = useCallback(async () => {
    try{
        const response = await fetch('https://moreleplus-default-rtdb.firebaseio.com/cart/.json?auth=lu3HGhtP4w4qmCKxlpVKUWxJpSA13R7skZqpzsVR', {
            headers: {
            }
        });
        if (!response.ok) {
            throw new Error("Something went wrong!");
        }

        const data = await response.json();

        const loadedCart = [];

        for(const key in data) {
            loadedCart.push({
                category_id: data[key].category_id,
                description: data[key].description,
                id: data[key].id,
                image_url: data[key].image_url,
                manufacturer: data[key].manufacturer,
                name: data[key].name,
                price: data[key].price,
                key: key,
            })
        }

        setCartItems(loadedCart);
    } catch(error) {}
})
  useEffect(() => {
    fetchCart();
  }, []);


  const handleDeleteFromCart = useCallback(async (id) => {
      fetch(
      // don't add .json at [data Name]
      `https://moreleplus-default-rtdb.firebaseio.com/cart/${id}.json?auth=lu3HGhtP4w4qmCKxlpVKUWxJpSA13R7skZqpzsVR`,
      {
        method: "Delete",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => {
        if (response.ok) {
          fetchCart();
        } else {
          // if fail throw error
          throw new Error("could not delete data");
        }
      })
      .catch((error) => {
        this.error = error.message;
      });
  }, []);


  const BackToMain = () => {
    navigation.navigate('Start');
  };

  const handlePay = () => {

    navigation.navigate('PaymentScreen', { cartItems, totalPrice });
  };
 
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <View style={styles.container}>

      <View>
        {cartItems.length === 0 ? (
          <View>
             <View style={styles.box}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
              <Feather name="chevron-left" size={30} />
            </TouchableOpacity>
            <Text style={styles.text}>Koszyk ({cartItems.length})</Text>
          </View>
          <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
           
            <Text style={{ fontSize: 23 }}>Nie znaleźliśmy żadnych produktów w Twoim koszyku!</Text>
            <TouchableOpacity onPress={BackToMain}>
              <Text style={{ fontSize: 23 }}>Wróć na <Text style={{ color: 'red', fontSize: 23 }}>stronę główną</Text> aby kontynuować zakupy</Text>
            </TouchableOpacity>
          </View>
          </View>
        ) : (
          <View style={styles.box}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
              <Feather name="chevron-left" size={30} />
            </TouchableOpacity>
            <Text style={styles.text}>Koszyk ({cartItems.length})</Text>
          </View>
        )}
      </View>
      <ScrollView
        style={{ marginBottom: 70 }}
      >
        {cartItems.map((item) => (
          <View style={styles.itemContainer}>
            <Image
              style={styles.itemImage}
              source={{ uri: item.image_url }}
            />
            <Text style={styles.itemText}>{item.name}</Text>
            <Text style={{ fontSize: 19, marginRight: 10 }}>{item.price} zł</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => handleDeleteFromCart(item.key)}
            >
              <Text style={styles.buttonText}>Usuń</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
      <View style={styles.ContainerPrice}>
        <TouchableOpacity
          
        onPress={handlePay} 
        disabled = {cartItems.length>0 ? false : true}

        >

          <Text style={styles.payButtonText}>Zapłać</Text>
        </TouchableOpacity>
        <Text style={styles.totalText}>Suma: {totalPrice.toFixed(2)} zł</Text>
      </View>


    </View>


  );
};
export default CartPage;


const styles = StyleSheet.create({
  container: {
    flex: 0,
    justifyContent: 'center',
  },
  box: {
    marginTop: 35,
    borderBottomWidth: 0.5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

  },
  inbox: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 25,
  },
  inside: {
    fontWeight: 'bold',
    fontSize: 28,
    marginLeft: 20,
    marginRight: 20,
  },
  inside1: {
    fontSize: 23,
    marginLeft: 20,
    marginRight: 20,
  },
  inside2: {
    fontSize: 23,
  },
  backButton: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1,
  },
  button: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    right: 0, // Używamy 'right' zamiast 'left'
    backgroundColor: '#FF513C',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    height: 50,
    marginBottom: 40,
    width: 60,
    marginHorizontal: 10,
    alignSelf: 'flex-end', // Dodajemy 'alignSelf: 'flex-end''
  },

  buttonText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 20,
  },
  image: {
    // flex: 1,
    width: '35%',
    height: '35%',
    alignSelf: 'center',
    aspectRatio: 1,
    resizeMode: 'center',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  itemImage: {
    width: 100,
    height: 100,
    marginRight: 10,
    marginLeft: 10,
    resizeMode: 'center',
  },
  itemText: {
    flex: 1,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#FF513C',
    borderRadius: 10,
    marginRight: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  ContainerPrice: {
    position: 'absolute',
    top: 720,
    left: 0,
    right: 0,
    //backgroundColor: '#FF513C',
    //alignItems: 'flex-end',
    justifyContent: 'center',
    height: 40,
    marginBottom: 33,
    marginTop: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    //paddingVertical: 10,
  },
  payButtonText: {
    //position: 'absolute',
    //bottom: 0,
    //left: 0,
    //right: 0,
    backgroundColor: '#FF513C',
    //alignItems: 'center',
    //justifyContent: 'center',
    borderRadius: 10,
    height: 33,
   // marginBottom: 40,
    marginHorizontal: 10,
    fontSize: 20,
    //marginRight: 5,
    fontWeight: 'bold',
    color: 'white',
    paddingHorizontal: 20,
    paddingVertical: 2,
  },
  totalText: {
    fontSize: 20,
    marginRight: 5,
    fontWeight: 'bold',
  },
});