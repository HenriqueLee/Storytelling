import React from "react";
import DrawerNavigator from "./Navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./Screens/login";
import RegisterScreen from "./Screens/register";
import { Drawer } from "react-native-paper";
import { firebaseConfig } from "./Config";
import firebase from "firebase";
const Stack= createStackNavigator()
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig)
}
else{
  firebase.app()
}
const Stacknave= ()=>{
  return(
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen}/>
      <Stack.Screen name="Register" component={RegisterScreen}/>
      <Stack.Screen name="Dashboard" component={DrawerNavigator}></Stack.Screen>
    </Stack.Navigator>
  )

}
  
export default function App() {
  return (
    <NavigationContainer>
      <Stacknave></Stacknave>
    </NavigationContainer>
    
  );
}

