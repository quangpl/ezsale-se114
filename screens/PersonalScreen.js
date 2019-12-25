import React from "react";
import { Text , ToastAndroid,Alert} from "react-native";
import { ExpoConfigView } from "@expo/samples";
import {connect} from "react-redux";
import { Avatar,Icon,Button } from "react-native-elements";
import {StyleSheet, View, TouchableOpacity} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import store from "../store"
import UserService from "../services/user"
import { addItem, login, auth,logout } from "../store/actions";
import { withNavigationFocus } from "react-navigation";

class PersonalScreen extends React.Component {
  /**
   * Go ahead and delete ExpoConfigView and replace it with your content;
   * we just wanted to give you a quick view of your config.
   */
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      user: {}
    };
  }
  componentDidUpdate(prevProps) {
    if (this.props.isFocused) {
      console.log(this.props.user.authInfo);
        if (!this.props.user.authInfo) {
          alert("Vui lòng đăng nhập để sử dụng tính năng này");
          this.props.navigation.navigate("Login");
          return false;
        }
    }
  }
  // componentDidMount() {
  //   //console.log(this.props.user.authInfo.payload);
  //   console.log(this.props.user.authInfo);
  //   if (!this.props.user.authInfo) {
  //     alert("Vui lòng đăng nhập để sử dụng tính năng này");
  //     this.props.navigation.navigate("Login");
  //     return false;
  //   }
  // }
  render() {
    return (
      <View style={styles.container}>
        {this.props.user.authInfo ? (
          <>
            <View style={styles.userInfo}>
              <View style={styles.left}>
                <Avatar size="medium" rounded title="U" />
              </View>

              <View style={styles.right}>
                <Text style={styles.font}>
                  {this.props.user.authInfo.payload.name}
                </Text>
                <Text style={styles.font}>
                  {this.props.user.authInfo.payload.email}
                </Text>
              </View>
            </View>

            <View style={styles.point}>
              <Icon name="star" type="font-awesome" color="#FF9933" />
              <Text style={styles.pointDetail}>
                {this.props.user.authInfo.payload.point}
              </Text>
            </View>

            <View style={styles.userSetting}>
              <View style={styles.left}>
                <Icon name="cogs" type="font-awesome" color="#199EFF" />
              </View>
              <View style={styles.right}>
                <Text style={styles.font}>Cài đặt</Text>
              </View>
            </View>
            <View style={styles.userSetting}>
              <View style={styles.left}>
                <Icon name="exchange" type="font-awesome" color="#199EFF" />
              </View>
              <View style={styles.right}>
                <TouchableOpacity
                    onPress={() => {
                    this.props.navigation.navigate("ChangePass");
                    }}
                  >
                    <Text style={styles.font}>Đổi mật khẩu</Text>
                  </TouchableOpacity>              
              </View>
            </View>
            <View style={styles.userSetting}>
              <View style={styles.left}>
                <Icon name="sign-out" type="font-awesome" color="#199EFF" />
              </View>
              <View style={styles.right}>
                <TouchableOpacity
                  onPress={() => {
                    console.log("logout");
                    ToastAndroid.showWithGravity(
                      "Đăng xuất thành công!",
                      ToastAndroid.SHORT,
                      ToastAndroid.CENTER
                    );
                   // await userService.logout();
                    // store.dispatch(logout());
                    
                    this.props.navigation.navigate("Login");
                   setTimeout(()=>{
                      store.dispatch(logout());
                   },1000)
                  }}
                >
                  <Text style={styles.font}>Đăng xuất</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.userSetting}>
              <View style={styles.left}>
                <Icon name="phone" type="font-awesome" color="#199EFF" />
              </View>
              <View style={styles.right}>
                <Text style={styles.font}>Hỗ trợ</Text>
              </View>
            </View>
          </>
        ) : (
          <>
            <Button
              buttonStyle={{
                marginTop: 80
              }}
              title="Đăng nhập"
              onPress={() => {
                this.props.navigation.navigate("Login");
              }}
            ></Button>
          </>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    flexDirection: "column"
  },
  left: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    flex: 0.2
  },
  right: {
    flex: 0.8,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "flex-start",
    flexDirection: "column"
  },
  userInfo: {
    flex: 0.13,
    flexDirection: "row",
    backgroundColor: "#fff",
    borderBottomColor: "#EDF3F4",
    borderBottomWidth: 1
  },
  font: {
    fontSize: 16
  },
  point: {
    flex: 0.13,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    borderBottomColor: "#EDF3F4",
    borderBottomWidth: 1
  },
  pointDetail: {
    fontSize: 30,
    color: "#FF9933"
  },
  userSetting:{
    flex: 0.13,
    flexDirection: "row",
    backgroundColor: "#fff",
    borderBottomColor: "#EDF3F4",
    borderBottomWidth: 1
  },

});




const mapStateToProps = state => ({
  items: state.items,
  user:state.user
});



PersonalScreen.navigationOptions = {
  title: "Cá nhân",
  headerTintColor: "white",
  
  headerBackground: (
    <LinearGradient
      colors={["#237AE4", "#6C5CE7"]}
      style={{ flex: 1, borderWidth: 0 }}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
    />
  )
};

export default connect(mapStateToProps)(withNavigationFocus(PersonalScreen));
