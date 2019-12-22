import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import FollowScreen from '../screens/FollowScreen';
import PersonalScreen from '../screens/PersonalScreen';
import NotifyScreen from "../screens/NotifyScreen";


const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: "Trang chủ",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === "ios"
          ? `md-home${focused ? "" : "-outline"}`
          : "md-home"
      }
    />
  )
};

HomeStack.path = '';

const FollowStack = createStackNavigator(
  {
    Follow: FollowScreen,
  },
  config
);

FollowStack.navigationOptions = {
  tabBarLabel: "Theo dõi",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-pulse" : "md-pulse"}
    />
  )
};

FollowStack.path = "";

const PersonalStack = createStackNavigator(
  {
    Personal: PersonalScreen
  },
  config
);

PersonalStack.navigationOptions = {
  tabBarLabel: "Cá nhân",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-person" : "md-person"}
    />
  )
};
PersonalStack.path = "";

const NotifyStack = createStackNavigator(
  {
    Notify: NotifyScreen
  },
  config
);

NotifyStack.navigationOptions = {
  tabBarLabel: "Thông báo",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-notifications" : "md-notifications"}
    />
  )
};

NotifyStack.path = ""


const tabNavigator = createBottomTabNavigator({
  HomeStack,
  FollowStack,
  NotifyStack,
  PersonalStack
});

tabNavigator.path = '';

export default tabNavigator;
