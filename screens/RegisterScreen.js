import React from "react";
import {TextInput, View, StyleSheet ,Text, TouchableWithoutFeedback, Keyboard} from "react-native";
import { Image, Button } from "react-native-elements";
import Icon from 'react-native-vector-icons/FontAwesome';


export default class LoginScreen extends React.Component {
  render(){
    const navigation = this.props.navigation

    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View style={styles.logo}>
            <Image source={require("../assets/images/logo.png")}  style={{ width: 120, height: 120 }}/>
            <Text style={styles.slogan}>Catch sale and sale your money !</Text>
          </View>

          <View style={styles.inputBox}>
            <TextInput style={styles.input} placeholder="Username" />
            <TextInput style={styles.input} placeholder="Email" textContentType='emailAddress' keyboardType='email-address' />
            <TextInput style={styles.input} placeholder="Password" secureTextEntry={true}  />
            <TextInput style={styles.input} placeholder="Confirm Password" secureTextEntry={true} />
          </View>

          <View style={styles.btnGroup}>
            <Button buttonStyle={styles.btn} size="large" type="outline" title="Đăng ký" />
            <Button  buttonStyle={styles.btnReg} size="large" type="clear" sty titleStyle={{ color:"#fff"}} 
            onPress={() => navigation.replace('Home',
            {value:true})}
            title="Đăng nhập"/>
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
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center"
  },

  slogan: {
    color: "#959595",
    fontSize: 15
  },
  inputBox:{
    flex: 0.4,
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
  },
  btnGroup:{
    flex: 0.3,
    marginTop:20,
  }
});

