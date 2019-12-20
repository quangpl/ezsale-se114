import React from "react";
import { View, StyleSheet ,Text,Button} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {Input,Image} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function LoginScreen() {
  return (
  <View style={styles.container}>
    <View style ={styles.img}>
      <Image
          source={{ uri: "https://image.flaticon.com/icons/png/512/584/584093.png" }}
          style={{ width: 150, height: 150 , color: "#fff" }}/>
    </View>


    <View style ={styles.title}>
      <Text style={styles.text}>Đăng nhập</Text>
    </View>

    <View style ={styles.userInfo}>
      <Input placeholder='  Tên đăng nhập / email' leftIcon={<Icon name='user' size={24} color='#fff'/>}/>
    </View>

    <View style ={styles.userInfo}>
      <Input placeholder='  Password' leftIcon={<Icon name='lock' size={24} color='#fff'/>}/>

    </View>


    <View style ={styles.btn}>
      <Button size="large" title="Login" />
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:"#fff",
    flexDirection: "column"

  },
  img:{
    flex: 0.3,
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },

  text:{
    color:"black",
    fontSize: 22,
    fontWeight: "bold"
  },
  title:{
    color: "#fff",
    flex: 0.1,
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },

  userInfo: {
    flex: 0.1,
    flexDirection: "row",
  },

  btn:{
    flex: 0.13,
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  }


});


// LoginScreen.navigationOptions = {
//   title: "Login",
//   headerTintColor: "white",
//   headerBackground: (
//     <LinearGradient
//       colors={["#237AE4", "#6C5CE7"]}
//       style={{ flex: 1, borderWidth: 0 }}
//       start={{ x: 0, y: 0 }}
//       end={{ x: 1, y: 0 }}/>
//   )
// };