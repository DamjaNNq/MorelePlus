import  React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StartPage from './screens/StartPage';
import MenuPage from './screens/menuPage';
import emptyCartPage from './screens/cartPage';
import AccountPage from './screens/accountPage';
import Feather from 'react-native-vector-icons/Feather'
import Icon from 'react-native-vector-icons/FontAwesome';
const Tab = createBottomTabNavigator();
const BottomTab = ()  => {
  return (
    <Tab.Navigator
    screenOptions={{
      tabBarShowLabel: false,
      tabBarStyle: {
        elevation: 0,
        borderTopWidth: 1,
        borderColor: 'black',
        backgroundColor: '#ffffff',
        headerBackground: '#ffffff',
        height: 60,

      }
    }}
  >
            <Tab.Screen name="Start" component={StartPage} style={styles1.Tab} options={{
        tabBarIcon: ({ focused }) => (
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Icon name="home" size={30}

              style={{
                color: focused ? '#FF513C' : '#000000',
              }} />
            <Text style={{ color: focused ? '#FF513C' : '#000000' }}>Start</Text>
          </View>
        ),
        headerShown: false,
      }} />
      <Tab.Screen name="Menu" component={MenuPage} style={styles1.Tab} options={{
        tabBarIcon: ({ focused }) => (
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Icon name="search" size={30}

              style={{
                color: focused ? '#FF513C' : '#000000',

              }} />
            <Text style={{ color: focused ? '#FF513C' : '#000000' }}>Menu</Text>
          </View>
        ),
        headerShown: false,
      }} />
      <Tab.Screen name="Koszyk" component={emptyCartPage} style={styles1.Tab} options={{
        tabBarIcon: ({ focused }) => (
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Icon name="shopping-cart" size={30}

              style={{
                color: focused ? '#FF513C' : '#000000',

              }} />
            <Text style={{ color: focused ? '#FF513C' : '#000000' }}>Koszyk</Text>
          </View>
        ),
        headerShown: false,
      }} />
      <Tab.Screen name="Konto" component={AccountPage} style={styles1.Tab} options={{
        tabBarIcon: ({ focused }) => (
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Icon name="user" size={30}

              style={{
                color: focused ? '#FF513C' : '#000000',

              }} />
            <Text style={{ color: focused ? '#FF513C' : '#000000' }}>Konto</Text>
          </View>
        ),
        headerShown: false,
      }} />
    </Tab.Navigator>
  );
};

export default BottomTab;

const styles1 = StyleSheet.create({
  container: {
    flex: 1,
  },
  Tab:{
    color:'white',
  }
  });