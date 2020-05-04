import React from "react";
import {
  createAppContainer,
  createStackNavigator,
  createBottomTabNavigator,
} from "react-navigation";
import MainScreen from "./src/screens/mainScreen";
import DetailMainScreen from "./src/screens/detailMain";
import DepartmentsScreen from "./src/screens/departmentsScreen";
import FovariteScreen from "./src/screens/favoriatesScreen";
import AboutUsScreen from "./src/screens/aboutUs";
import ContactUsScreen from "./src/screens/contactUs";
import DetailDepScreen from "./src/screens/detailsDep";

const App = createBottomTabNavigator({
  MainScreen: createStackNavigator({
    Main: MainScreen,
    Detail: DetailMainScreen,
  }),
  Department: createStackNavigator({
    MainDep: DepartmentsScreen,
    DetailDep: DetailDepScreen,
  }),
  Fovarite: FovariteScreen,
  AboutUs: AboutUsScreen,
  ContactUs: ContactUsScreen,
});

export default createAppContainer(App);
