import React, { useState, createContext, useContext, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './components/Home_P';
import SignIn from './components/SignIn';
import DetailsScreen from './components/screens/DetailsScreen';
import CartPage from './components/screens/cartPage';
import Categoryitem from './components/screens/categoryitem';
import SearchScreen from './components/screens/SearchScreen';
import PaymentScreen from './components/screens/PaymentScreen';
import PaymentSuccessScreen from './components/screens/PaymentSuccessScreen';
import PaymentFailureScreen from './components/screens/PaymentFailureScreen';
import OrdersScreen from './components/screens/OrderScreen';
import AccountScreen from './components/screens/accountPage';

const Stack = createStackNavigator();
const AuthenticatedUserContext = createContext({});

const AuthenticatedUserProvider = ({ children }) => { 
    const [user, setUser] = useState();
    return (
        <AuthenticatedUserContext.Provider value={{ user, setUser }}>
            {children}
        </AuthenticatedUserContext.Provider>
    );
};

function MorelePlus() {
    return (

        <Stack.Navigator defaultScreenOptions={Home} screenOptions={{ headerShown: false }}>
            <Stack.Screen name='SignIn' component={SignIn} />
            <Stack.Screen name='Home_P' component={Home} />
            <Stack.Screen name='DetailsScreen' component={DetailsScreen} />
            <Stack.Screen name="CartPage" component={CartPage} />
            <Stack.Screen name='CategoryItem' component={Categoryitem} />
            <Stack.Screen name='SearchScreen' component={SearchScreen} />
            <Stack.Screen name='PaymentScreen' component={PaymentScreen} />
            <Stack.Screen name='PaymentSuccessScreen' component={PaymentSuccessScreen} />
            <Stack.Screen name='PaymentFailureScreen' component={PaymentFailureScreen} />
            <Stack.Screen name='OrderScreen' component={OrdersScreen} />
            <Stack.Screen name='AccountScreen' component={AccountScreen} />
        </Stack.Navigator>

    );
}

export default function App() {
    return (
        <AuthenticatedUserProvider>
            <NavigationContainer>
                <MorelePlus />
            </NavigationContainer>
        </AuthenticatedUserProvider>
    );
}