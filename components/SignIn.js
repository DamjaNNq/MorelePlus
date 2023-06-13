import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, Alert, ScrollView } from "react-native";
import { signInWithEmailAndPassword, fetchSignInMethodsForEmail } from "firebase/auth";
//import { auth } from "../config/config";
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import axios, { isCancel, AxiosError } from 'axios';

export default function SignIn({ navigation }) {
  const [email, setEmail] = useState("");//stan poczatkowy
  const [password, setPassword] = useState("");
  const [emailRegister, setEmailRegister] = useState("");//stan poczatkowy
  const [passwordRegister, setPasswordRegister] = useState("");
  const [confirmPassword, setConfirmPassword] = useState('');
  const auth = getAuth();  // pobieranie obiektu "auth"




  const onHandleLogin = () => {
    if (email !== "" && password !== "") {//sprawdzenie czy jest puste
      signInWithEmailAndPassword(auth, email, password)//wywolanie funkcji logowania
        .then(() => navigation.navigate("Home_P")
        )
        .catch((err) => Alert.alert("Niepoprawny login lub hasło"));
    }
  };

  const onHandleSignup = () => {
    if (passwordRegister !== confirmPassword) {
      return Alert.alert('Niepoprawne hasło');
    }
  
    if (emailRegister !== '' && passwordRegister !== '') {
      // Sprawdź, czy konto już istnieje
      fetchSignInMethodsForEmail(auth, emailRegister)
        .then((signInMethods) => {
          if (signInMethods.length > 0) {
            // Konto już istnieje, wyświetl odpowiedni komunikat
            return Alert.alert('Konto z takim emailem juz istnieje, proszę się zalogować');
          }
          // Konto nie istnieje, można utworzyć nowe
          createUserWithEmailAndPassword(auth, emailRegister, passwordRegister)
            .then((userCredential) => {
              navigation.navigate('Home_P'); // przekieruj do strony Home_P po udanej rejestracji
              const user = userCredential.user;
              console.log('Signup success');
              console.log(userCredential.user.uid);
              return Alert.alert('Konto zostało utworzone');
            })
            .catch((err) => Alert.alert('Błąd rejestracji', err.message));
        })
        .catch((err) => Alert.alert('Błąd logowania', err.message));
    }
  };
  

  // axios.get('https://moreleplus-default-rtdb.firebaseio.com/products/.json?auth=lu3HGhtP4w4qmCKxlpVKUWxJpSA13R7skZqpzsVR')
  //   .then((response) => {
  //     console.log(response.data)
  //   });

  return (

    <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
      <View style={styles.container}>
        <Image
          source={require('../assets/img/morele.png')}
          style={{ margin: 20, marginTop: 50, }} />
        <Text style={styles.text}>Mam konto</Text>

        <TextInput
          style={styles.buttonInput}
          placeholder="e-mail"
          value={email}
          onChangeText={(text) => setEmail(text)}
          autoCapitalize="none" //wielkie litery
          keyboardType="email-address"
          textContentType="emailAddress"
          autoFocus={true} //autoskupienie na polu
        />

        <TextInput
          style={styles.buttonInput}
          placeholder="hasło"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={onHandleLogin}
        >
          <Text style={styles.buttonText}>Zaloguj się</Text>
        </TouchableOpacity>

        <Text style={styles.text}>Nie mam konta</Text>

        <TextInput
          style={styles.buttonInput}
          placeholder="e-mail"
          value={emailRegister}
          onChangeText={(text) => setEmailRegister(text)}
          autoCapitalize="none" //wielkie litery
          keyboardType="email-address"
          textContentType="emailAddress"
          autoFocus={true} //autoskupienie na polu
        />
        <TextInput
          style={styles.buttonInput}
          placeholder="hasło"
          secureTextEntry={true}
          value={passwordRegister}
          onChangeText={(text) => setPasswordRegister(text)}
        />
        <TextInput
          style={styles.buttonInput}
          placeholder="potwierdź hasło"
          secureTextEntry={true}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
        <TouchableOpacity style={styles.button}
          onPress={onHandleSignup}
        >
          <Text style={styles.buttonText}>Utwórz konto</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>


  );
}
const styles = StyleSheet.create({
  container: {
    flex: 0,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
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
  buttonText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 20,
  },
  buttonInput: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    paddingVertical: 12,
    paddingHorizontal: 10,
    height: 50,
    width: '95%',
    borderRadius: 10,
    borderWidth: 0.7,
    borderColor: '#808080',
    backgroundColor: 'white',
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
    marginTop: 30,
  },
  scrollView: {
    //marginHorizontal: 20,
  },

});