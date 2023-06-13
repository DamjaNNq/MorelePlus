import React, { useEffect, useState } from 'react';
import { Text, View, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import axios, { isCancel, AxiosError } from 'axios';


export default function StartPage({ navigation }) {
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
    <ScrollView showsVerticalScrollIndicator={false} >
      <View style={styles.container}>
        <Image
          source={require('../../assets/img/morele.png')}
          style={{ marginTop: 50 }}
        />
        <View style={styles.box}>
          <Text style={styles.toptext}>
            Polecane
          </Text>

        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={{ flexDirection: "row" }}>
            {data.map((item) => {
              if (item.category_id === 3) {
                return (
                  <TouchableOpacity
                    key={item.id}
                    onPress={() => handlePress(item.id)}
                  >
                    <View key={item.id}>
                      <Image
                        source={{ uri: item.image_url }}
                        style={{ flex: 1, width: '40%', height: '40%', marginRight: 25, aspectRatio: 1, resizeMode: 'center' }}
                      />
                      <Text style={{ fontSize: 20 }}>{item.price} zł</Text>
                      <Text style={{ marginRight: 25, fontSize: 20 }}>{item.name.substring(0, 13) + '...'}</Text>
                    </View>
                  </TouchableOpacity>
                );
              } else {
                return null;
              }
            })}
          </View>
        </ScrollView>
        <View style={styles.box}>
          <Text style={styles.toptext}>
            Bestsellery
          </Text>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={{ flexDirection: "row" }}>
            {data.map((item) => {
              if (item.category_id === 6) {
                return (
                  <TouchableOpacity
                    key={item.id}
                    onPress={() => handlePress(item.id)}
                  >
                  <View key={item.id}>
                    <Image
                      source={{ uri: item.image_url }}
                      style={{ flex: 1, width: '40%', height: '40%', marginRight: 25, aspectRatio: 1,  resizeMode: 'center' }}
                    />
                    <Text style={{ fontSize: 20 }}>{item.price} zł</Text>
                    <Text style={{ marginRight: 25, fontSize: 20 }}>{item.name.substring(0, 13) + '...'}</Text>
                  </View>
                  </TouchableOpacity>
                );
              } else {
                return null;
              }
            })}
          </View>
        </ScrollView>
        <View style={styles.box}>
          <Text style={styles.toptext}>
            Wsadź w swojego laptopa
          </Text>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={{ flexDirection: "row" }}>
            {data.map((item) => {
              if (item.category_id === 5) {
                return (
                  <TouchableOpacity
                    key={item.id}
                    onPress={() => handlePress(item.id)}
                  >
                  <View key={item.id}>
                    <Image
                      source={{ uri: item.image_url }}
                      style={{ flex: 1, width: '40%', height: '40%', marginRight: 25, aspectRatio: 1, resizeMode: 'center' }}
                    />
                    <Text style={{ fontSize: 20 }}>{item.price} zł</Text>
                    <Text style={{ marginRight: 25, fontSize: 20 }}>{item.name.substring(0, 13) + '...'}</Text>
                  </View>
                  </TouchableOpacity>
                );
              } else {
                return null;
              }
            })}
          </View>
        </ScrollView>
        <View style={styles.box}>
          <Text style={styles.toptext}>
            Sprzęt audio
          </Text>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={{ flexDirection: "row" }}>
            {data.map((item) => {
              if (item.category_id === 8) {
                return (
                  <TouchableOpacity
                    key={item.id}
                    onPress={() => handlePress(item.id)}
                  >
                  <View key={item.id}>
                    <Image
                      source={{ uri: item.image_url }}
                      style={{ flex: 1, width: '40%', height: '40%', marginRight: 25, aspectRatio: 1, resizeMode: 'center' }}
                    />
                    <Text style={{ fontSize: 20 }}>{item.price} zł</Text>
                    <Text style={{ marginRight: 25, fontSize: 20 }}>{item.name.substring(0, 13) + '...'}</Text>
                  </View>
                  </TouchableOpacity>
                );
              } else {
                return null;
              }
            })}
          </View>
        </ScrollView>

      </View>
    </ScrollView >
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  box: {
    flex: 0.5,
  },
  image: {
    width: 50,
    height: 50,
  },
  toptext:
  {
    marginTop: 15,
    fontWeight: 'bold',
    fontSize: 25,
  }

});
