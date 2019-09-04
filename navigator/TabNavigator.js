import React from "react";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "../screens/HomeScreen";
import SectionScreen from "../screens/SectionScreen";

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Section: SectionScreen
});

HomeStack.navigationOptions = {
  tabBarLabel: "Home"
};

const CoursesStack = createStackNavigator({
  Courses: SectionScreen
});

CoursesStack.navigationOptions = {
  tabBarLabel: "Courses"
};

const ProjectsStack = createStackNavigator({
  Projects: SectionScreen
});

ProjectsStack.navigationOptions = {
  tabBarLabel: "Projects"
};

const TabNavigator = createBottomTabNavigator({
  HomeStack,
  CoursesStack,
  ProjectsStack
});

export default TabNavigator;
