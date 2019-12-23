import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import FollowScreen from '../screens/FollowScreen';
import PersonalScreen from '../screens/PersonalScreen';
import NotifyScreen from "../screens/NotifyScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import ItemDetails from "../screens/ItemDetails";

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

const LoginStack = createStackNavigator(
  {
    Login: LoginScreen,
  },
  config
);

LoginStack.navigationOptions = {
  tabBarLabel: "Login",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-notifications" : "md-notifications"}
    />
  )
};

LoginStack.path = "";

const RegisterStack = createStackNavigator(
  {
    Register: RegisterScreen,
  },
  config
);

RegisterStack.navigationOptions = {
  tabBarLabel: "Register",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-notifications" : "md-notifications"}
    />
  )
};

RegisterStack.path = "";

const ItemDetailsStack = createStackNavigator(
  {
    ItemDetail: ItemDetails
  },
  config
);

ItemDetailsStack.navigationOptions = {
  tabBarLabel: "ItemDetails",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-notifications" : "md-notifications"}
    />
  )
};

ItemDetailsStack.path = "";
const tabNavigator = createBottomTabNavigator({
  HomeStack,
  FollowStack,
  NotifyStack,
  PersonalStack,
  LoginStack,
  RegisterStack,
  ItemDetailsStack
});

tabNavigator.path = '';

export default tabNavigator;
