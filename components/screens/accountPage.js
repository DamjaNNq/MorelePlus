import React, { useState, useRef } from 'react';
import { Text, View, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { getAuth, signOut } from 'firebase/auth';
import StartPage from './StartPage';
import auth, { database } from '../../config/config';

const AccountScreen = () => {
  //const { totalPrice } = route.params;
  const [isLoggedOut, setIsLoggedOut] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [orders, setOrders] = useState([]);
  const navigation = useNavigation();
  const auth = getAuth();

  const handleOrderScreen = (cartItems, totalPrice) => {
    navigation.navigate('OrderScreen', { cartItems: cartItems, totalPrice: totalPrice });
  };

  const handleSignOut = () => {
    try {
      signOut(auth).then(() => {
        console.log('signout successful');
        console.log(auth.currentUser);
        setIsLoggedOut(true);
      });
    } catch (error) {
      console.log('Error logging out: ', error);
    }
  };

  const handleUpdateData = () => {
    if (!firstName || !lastName || !phone) {
      Alert.alert('Uwaga', 'Proszę wypełnić wszystkie pola');
      return;
    }

    // Logika aktualizacji danych konta

    Alert.alert('Sukces', 'Zaktualizowano dane');
  };

  const firstNameInputRef = useRef();
  const lastNameInputRef = useRef();
  const phoneInputRef = useRef();

  if (isLoggedOut) {
    navigation.navigate('SignIn');
  }

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <TouchableOpacity onPress={() => navigation.navigate('Start')}>

        
        <Feather name="chevron-left" size={30} style={{ marginRight: 10, left: -120 }} />
        </TouchableOpacity>
        <Text style={styles.text}>Twoje konto</Text>
      </View>

      <View style={styles.inbox}>
        <Text style={styles.first}>Zmiana podstawowych danych konta</Text>
        <Text style={styles.dane}>Imię:</Text>
        <TextInput
          style={styles.buttonInput}
          placeholder="Imię"
          keyboardType="default"
          onChangeText={text => setFirstName(text)}
          ref={firstNameInputRef}
        />

        <Text style={styles.dane}>Nazwisko:</Text>
        <TextInput
          style={styles.buttonInput}
          placeholder="Nazwisko"
          keyboardType="default"
          onChangeText={text => setLastName(text)}
          ref={lastNameInputRef}
        />

        <Text style={styles.dane}>Telefon:</Text>
        <TextInput
          style={styles.buttonInput}
          placeholder="Telefon"
          keyboardType="phone-pad"
          onChangeText={text => setPhone(text)}
          ref={phoneInputRef}
        />

        <TouchableOpacity style={styles.button} onPress={handleUpdateData}>
          <Text style={styles.buttonText}>Potwierdź zmiany</Text>
        </TouchableOpacity>
      

        <TouchableOpacity style={styles.button} onPress={handleSignOut}>
          <Text style={styles.buttonText}>Wyloguj</Text>
        </TouchableOpacity>
      </View>


    </View>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  box: {
    marginTop: 35,
    margin: 20,
    borderBottomWidth: 0.5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inbox: {
    marginLeft: 20,
    justifyContent: 'center',
  },
  text: {
    fontSize: 25,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: '#FF513C',
    marginBottom: 40,
    height: 50,
    width: '95%',
  },
  button1: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: 'white',
    marginBottom: 40,
    height: 50,
    width: '95%',
    borderWidth: 1,
  },
  buttonInput: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
    paddingVertical: 12,
    paddingHorizontal: 10,
    height: 50,
    width: '95%',
    borderRadius: 10,
    borderWidth: 0.7,
    borderColor: '#808080',
    backgroundColor: 'white',
  },
  buttonText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 20,
  },
  buttonText1: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 20,
  },
  dane: {
    color: 'black',
    fontSize: 18,
  },
  first: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 20,
    marginBottom: 30,
  },
});