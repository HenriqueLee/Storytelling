import React,{Component} from "react";
import { createStackNavigator } from "@react-navigation/stack";

import BottomTab from "./BottomTab";
import StoryScreen from "../Screens/StoryScreen"
const Stack= createStackNavigator()

export default class StackNavigator extends Component{
render(){
  return(
    <Stack.Navigator>
      <Stack.Screen name="Home" component={BottomTab}/>
      <Stack.Screen name="Histories" component={StoryScreen}/>
    </Stack.Navigator>
  )
}
}