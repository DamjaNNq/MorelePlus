import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import axios, { isCancel, AxiosError } from 'axios';

const SearchScreen = ({ route }) => {
  const { item,name, manufacturer,description } = route.params;
  const { category, categoryName } = route.params;
  const navigation = useNavigation();
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        'https://moreleplus-default-rtdb.firebaseio.com/products/.json?auth=lu3HGhtP4w4qmCKxlpVKUWxJpSA13R7skZqpzsVR'
      )
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handlePress = (id) => {
    navigation.navigate('DetailsScreen', { item: data.find(item => item.id === id) });
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Feather name="chevron-left" size={30} />
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {data.map((item) => {
          if (item.name.toLowerCase().includes(name)||item.manufacturer.toLowerCase().includes(manufacturer)) {
            return (
              <TouchableOpacity
                key={item.id}
                onPress={() => handlePress(item.id)}
                style={{ flexDirection: 'column', alignItems: 'center', marginBottom: 10 }}
              >
                {/* <View key={item.id}> */}
                <Image
                  source={{ uri: item.image_url }}
                  style={{ flex: 1, width: '40%', height: '40%', marginRight: 25, aspectRatio: 1, resizeMode: 'center' }}
                />
                <Text style={{ marginRight: 25, fontSize: 20 }}>{item.name}</Text>
                <Text style={{ marginRight: 25, fontSize: 20 }}>{item.manufacturer}</Text>
                
                <Text style={{ fontSize: 20 }}>{item.price} zł</Text>
                {/* </View> */}
              </TouchableOpacity>
            );
          } else {
            return null;
          }
        })}
      </ScrollView>


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

export default SearchScreen;
