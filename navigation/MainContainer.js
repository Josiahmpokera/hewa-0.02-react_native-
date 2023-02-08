import * as React from 'react';
import {View, Text, SafeAreaView} from 'react-native';


// Import the Screens

 import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Entypo';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


// Import the Screens here
import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';
import NavigatorScreen from './screens/NavigatorScreen';

// Create the Screens

const homeName = 'Home';
const searchName = 'Search';
const navigatorName = 'Navigator';

const Tab = createBottomTabNavigator();
const Stack= createNativeStackNavigator();

function MainContainer() {
    return (
     <NavigationContainer>
           <Tab.Navigator 
           screenOptions={({route}) => ({
            tabBarShowLabel: false,
            headerShown : false,
            tabBarActiveTintColor: 'orange',
            tabBarStyle: {
                backgroundColor: '#1757AE',
                padding: 2
            },
            tabBarIcon: ({
                focused,
                color,
                size
            }) => {
                let iconName;
                let rn = route.name;

                if(rn === homeName){
                    iconName = focused ? 'home' : 'home';
                } else if (rn == searchName){
                    iconName = focused ? 'magnifying-glass' : 'magnifying-glass'
                } else if(rn == navigatorName) {
                    iconName = focused ? 'reply' : 'reply'
                } return <Ionicons name={iconName} size={size} color={color}/>

            }
           })}>

            <Tab.Screen  name='Home' component={HomeScreen}/>
            <Tab.Screen name='Search' component={SearchScreen}/>
            <Tab.Screen name='Navigator' component={NavigatorScreen}/>

        </Tab.Navigator>
     </NavigationContainer>
    );
}

export default MainContainer;