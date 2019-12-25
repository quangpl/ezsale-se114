import React from "react";
import {
  TextInput,
  View,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  ToastAndroid
} from "react-native";
import { Image, Button } from "react-native-elements";
import Icon from 'react-native-vector-icons/FontAwesome';
import UserService from "../services/user"
import { LinearGradient } from 'expo-linear-gradient';

export default class ChangePassword extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name:"",
      email:"",
      password:""
    }
  }

  async onRegister(){
    const {name,email,password} = this.state;
    if(!name||!email||!password){
      ToastAndroid.showWithGravity(
        "Thông tin bạn nhập chưa đẩy đủ",
        ToastAndroid.SHORT,
        ToastAndroid.CENTER
      );
      return false;
    }
    else if(email!=password)
    {
        ToastAndroid.showWithGravity(
            "Mật khẩu mới không khớp nhau",
            ToastAndroid.SHORT,
            ToastAndroid.CENTER);
        this.state.email="",
        this.state.password=""
    }

const userService = new UserService();
const res = await userService.register({
  name,
  email,
  password
})
if(res.error){
  ToastAndroid.showWithGravity(
    "Email của bạn đã có người sử dụng!",
    ToastAndroid.SHORT,
    ToastAndroid.CENTER
  );
  return false;
}
this.setState({
  name:"",
  email:"",
  password:""
})
ToastAndroid.showWithGravity(
        "Đăng ký thành công ! Nhấn Đăng nhập để tiếp tục sử dụng",
        ToastAndroid.LONG,
        ToastAndroid.CENTER
      );
  }
  render(){
    const navigation = this.props.navigation

    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>

          <View style={styles.inputBox}>
            <TextInput
              style={styles.input}
              placeholder="Mật khẩu cũ"
              value={this.state.name}
              secureTextEntry={true}
              onChangeText={text => {
                this.setState({
                  name: text
                });
              }}
            />
            <TextInput
              style={styles.input}
              placeholder="Mật khẩu mới"
              value={this.state.email}
              secureTextEntry={true}

              require
              onChangeText={text => {
                this.setState({
                  email: text
                });
              }}
            />
            <TextInput
              style={styles.input}
              value={this.state.password}
              placeholder="Mật khẩu mới"
              secureTextEntry={true}
              require
              onChangeText={text => {
                this.setState({
                  password: text
                });
              }}
            />
          </View>

          <View style={styles.btnGroup}>
            <Button
              buttonStyle={styles.btn}
              size="large"
              type="outline"
              title="Lưu"
              onPress={() => this.onRegister()}
            />
            <Button
              buttonStyle={styles.btnReg}
              size="large"
              type="clear"
              onPress={() => this.props.navigation.navigate("Login")}
              titleStyle={{ color: "#fff" }}
              title="Huỷ"
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
 

ChangePassword.navigationOptions = {
    title:"Đổi mật khẩu",
    headerTintColor:"white",
    headerBackground: (
      <LinearGradient
        colors={["#237AE4", "#6C5CE7"]}
        style={{ flex: 1, borderWidth: 0 }}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      />
    )
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "column",
    paddingTop:100
  },
  logo: {
    flex: 0.4,
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center"
  },

  slogan: {
    color: "#959595",
    fontSize: 15
  },
  inputBox: {
    flex: 0.4,
    justifyContent: "flex-end",
    alignContent: "flex-end",
    flexDirection: "column"
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
  btnReg: {
    borderRadius: 25,
    width: 200,
    alignSelf: "center",
    marginTop: 20,
    backgroundColor: "#189DFF"
  },
  btnGroup: {
    flex: 0.3,
    marginTop: 20
  },
  title: {
    fontSize: 24
  }
});

