import React,{Component} from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Feed from "../Screens/Feed";
import CreateStory from "../Screens/CreateStory";

const Tab= createBottomTabNavigator()

export default class BottomTab extends Component{
render(){
  return(
    <Tab.Navigator>
      <Tab.Screen name="Feed" component={Feed}/>
      <Tab.Screen name="CriarHistoria" component={CreateStory}/>
    </Tab.Navigator>
  )
}
}