import React,{Component} from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import StackNavigator from "./stacknavigator";
import BottomTab from "./BottomTab";
import Profile from "../Screens/Profile";
const Drawer= createDrawerNavigator()

export default class DrawerNavigator extends Component{
render(){
  return(
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={StackNavigator}/>
      <Drawer.Screen name="Profile" component={Profile}/>
    </Drawer.Navigator>
  )
}
}