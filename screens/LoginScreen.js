import React from "react";
import {TextInput, View, StyleSheet ,Text} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image, Button } from "react-native-elements";
import Icon from 'react-native-vector-icons/FontAwesome';


export default class LoginScreen extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        <View style={styles.logo}>
          <Image
            source={require("../assets/images/cart.png")}
            style={{ width: 70, height: 70 }}
          />
          <Text style={styles.slogan}>Catch sale and sale your money !</Text>
        </View>

        <View style={styles.title}>
          <Text style={styles.text}>Đăng nhập</Text>
        </View>

        <TextInput style={styles.input} placeholder="Email" />
        <TextInput style={styles.input} placeholder="Password" />

        <View style={styles.btnGroup}>
          <Button
            buttonStyle={styles.btn}
            size="large"
            type="outline"
            title="Đăng nhập"
          />
          <Button
            buttonStyle={styles.btnReg}
            size="large"
            type="clear"
            sty
            titleStyle={{
              color:"#fff"
            }}
            title="Đăng ký"
          />
        </View>
      </View>
    );
  }
  
}
 

LoginScreen.navigationOptions = {
  header: null
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "column"
  },
  logo: {
    flex: 0.5,
    flexDirection: "column",
    justifyContent: "flex-end",
    alignContent: "flex-end",
    alignItems: "center"
  },

  text: {
    color: "white",
    fontSize: 22
  },
  slogan: {
    color: "#959595",
    fontSize: 15
  },

  input: {
    marginVertical: 10,
    backgroundColor: "#fff",
    borderRadius: 5,
    height: 45,
    marginHorizontal: 14,
    borderWidth: 1,
    borderColor: "#189DFF",
    paddingLeft: 10
  },
  title: {
    color: "#fff",
    flex: 0.1,
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center"
  },

  userInfo: {
    flex: 0.1,
    flexDirection: "row"
  },

  btn: {
    borderRadius: 25,
    width: 200,
    alignSelf: "center"
  },
  btnReg:{
    borderRadius: 25,
    width: 200,
    alignSelf: "center",
    marginTop:20,
    backgroundColor:"#189DFF",
    color:"#fff"
  },
  btnGroup:{
    marginTop:20,
  }
});

