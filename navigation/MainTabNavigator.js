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
import ChangePassword from '../screens/ChangePassword'
import AddProduct from '../components/AddProduct'
const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    Register: RegisterScreen,
    Detail:ItemDetails,
    Personal: PersonalScreen,
    Home: HomeScreen,
    Login:LoginScreen,
    ChangePass:ChangePassword,  
    AddPr:AddProduct,
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

const AddProStack = createStackNavigator(
  {
    AddPr: AddProduct,
    Detail:ItemDetails,
  },
  config
);

AddProStack.navigationOptions = {
  //tabBarLabel: "T",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-pulse" : "md-pulse"}
    />
  )
};

AddProStack.path = "";
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
    Personal: PersonalScreen,
    Home: HomeScreen,
    Register: RegisterScreen,
    Detail:ItemDetails,
    Login:LoginScreen,
    ChangePass:ChangePassword,
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
    Notify: NotifyScreen,
    Personal: PersonalScreen,
    Home: HomeScreen,
    Register: RegisterScreen,
    Detail:ItemDetails,
    Login:LoginScreen,
    ChangePass:ChangePassword,
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
    Personal: PersonalScreen,
    Home: HomeScreen,
    Register: RegisterScreen,
    Detail:ItemDetails,
    Login:LoginScreen,
    ChangePass:ChangePassword,
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


const ChangePassStack = createStackNavigator(
  {
    ChangePass:ChangePassword,
    Personal: PersonalScreen,
    Home: HomeScreen,
    Register: RegisterScreen,
    Detail:ItemDetails,
    Login:LoginScreen,
    ChangePass:ChangePassword,
  },
  config
);

ChangePassStack.navigationOptions = {
  tabBarLabel: "ChangePass",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-notifications" : "md-notifications"}
    />
  )
};

ChangePassStack.path = "";


// const RegisterStack = createStackNavigator(
//   {
//     Register: RegisterScreen,
//   },
//   config
// );

// RegisterStack.navigationOptions = {
//   tabBarLabel: "Register",
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon
//       focused={focused}
//       name={Platform.OS === "ios" ? "ios-notifications" : "md-notifications"}
//     />
//   )
// };

//RegisterStack.path = "";

const ItemDetailsStack = createStackNavigator(
  {
    ItemDetail: ItemDetails,
    Personal: PersonalScreen,
    Home: HomeScreen,
    Register: RegisterScreen,
    Detail:ItemDetails,
    Login:LoginScreen,
    ChangePass:ChangePassword,
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

// ItemDetailsStack.path = "";
const tabNavigator = createBottomTabNavigator({
  HomeStack,
  FollowStack,
  NotifyStack,
  PersonalStack,
  //ChangePassStack,
  //LoginStack,
});

tabNavigator.path = '';

export default tabNavigator;
