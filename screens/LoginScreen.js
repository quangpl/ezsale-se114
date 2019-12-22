import React from "react";
import {TextInput, View, StyleSheet ,Text, TouchableWithoutFeedback, Keyboard} from "react-native";
import { Image, Button,CheckBox  } from "react-native-elements";
import Icon from 'react-native-vector-icons/FontAwesome';


export default class LoginScreen extends React.Component {
  render(){
    const navigation = this.props
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>

          <View style={styles.logo}>
            <Image source={require("../assets/images/logo.png")} style={{ width: 120, height: 120 }}/>
            <Text style={styles.slogan}>Catch sale and sale your money !</Text>
          </View>

          <View style={styles.inputBox}>
            <TextInput style={styles.input} placeholder="Email" textContentType='emailAddress' keyboardType='email-address' />
            <TextInput style={styles.input} placeholder="Password" secureTextEntry={true}  />
          </View>

          <View style={styles.btnGroup}>
            <Button buttonStyle={styles.btn} size="large" type="outline" title="Đăng nhập" onPress={() => navigation.navigate('HomeScreen',
            {value:true})}
            />
            <Button buttonStyle={styles.btnReg} size="large" type="clear" sty titleStyle={{ color:"#fff"}} title="Đăng ký"/>
          </View>
        </View>
      </TouchableWithoutFeedback>
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
    flex: 0.3,
    flexDirection: "column",
    justifyContent: "flex-end",
    alignContent: "flex-end",
    alignItems: "center"
  },

  slogan: {
    color: "#959595",
    fontSize: 15
  },

  inputBox:{
    flex: 0.25,
    justifyContent: "flex-end",
    alignContent: "flex-end",
    flexDirection: "column",
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
  
  checkbox: {
    flex: 0.1,
    flexDirection: "row",
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
    flex: 0.35,
    marginTop:20,
  }
});

