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
import { addItem, login, auth } from "../store/actions";
import store from "../store";

import { Image, Button, CheckBox } from "react-native-elements";
import { connect } from "react-redux";
import Icon from "react-native-vector-icons/FontAwesome";
import UserService from "../services/user";
import { LinearGradient } from "expo-linear-gradient";

 class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  async componentDidMount(){
    const userService = new UserService();
    await userService.logout();
  }
  async onLogin() {
    const { email, password } = this.state;
    if ( !email || !password) {
      ToastAndroid.showWithGravity(
        "Thông tin bạn nhập chưa đẩy đủ",
        ToastAndroid.SHORT,
        ToastAndroid.CENTER
      );
      return false;
    }
    const userService = new UserService();
    const res = await userService.login({
      email,
      password
    });
    if (!res) {
      ToastAndroid.showWithGravity(
        "Thông tin đăng nhập chưa chính xác",
        ToastAndroid.SHORT,
        ToastAndroid.CENTER
      );
      return false;
    }
    this.setState({
      email: "",
      password: ""
    });


    const authInfo = await userService.auth();
    store.dispatch(auth(authInfo));
    ToastAndroid.showWithGravity(
      "Đăng nhập thành công !",
      ToastAndroid.LONG,
      ToastAndroid.CENTER
    );
    this.props.navigation.navigate("Home");
  }

  render() {
    const navigation = this.props.navigation;
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View style={styles.logo}>
            <Image
              source={require("../assets/images/logo.png")}
              style={{ width: 120, height: 120 }}
            />
            <Text style={styles.title}>Đăng nhập</Text>
          </View>

          <View style={styles.inputBox}>
            <TextInput
              style={styles.input}
              placeholder="Email"
              textContentType="emailAddress"
              keyboardType="email-address"
              onChangeText={text => {
                this.setState({
                  email: text
                });
              }}
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              onChangeText={text => {
                this.setState({
                  password: text
                });
              }}
              secureTextEntry={true}
            />
          </View>

          <View style={styles.btnGroup}>
            <Button
              buttonStyle={styles.btn}
              size="large"
              type="outline"
              title="Đăng nhập"
              onPress={() => {
                this.onLogin();
              }}
            />
            <Button
              buttonStyle={styles.btnReg}
              size="large"
              type="clear"
              sty
              titleStyle={{ color: "#fff" }}
              title="Đăng ký"
              onPress={() => this.props.navigation.navigate("Register")}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
LoginScreen.navigationOptions = {
  header:null
};
export default connect()(LoginScreen);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "column"
  },
  logo: {
    flex: 0.4,
    flexDirection: "column",
    justifyContent: "flex-end",
    alignContent: "flex-end",
    alignItems: "center"
  },

  slogan: {
    color: "#959595",
    fontSize: 15
  },

  inputBox: {
    flex: 0.25,
    justifyContent: "flex-end",
    alignContent: "flex-end",
    flexDirection: "column",
    marginTop:20,
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
    marginTop:20,
    backgroundColor:"#189DFF",
  },

  btnGroup: {
    flex: 0.35,
    marginTop:35,
  }
});
