import React from "react";
import { Text } from "react-native";
import { ExpoConfigView } from "@expo/samples";
import {connect} from "react-redux";
import { Avatar,Icon } from "react-native-elements";
import {StyleSheet, View} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

class PersonalScreen extends React.Component {
  /**
   * Go ahead and delete ExpoConfigView and replace it with your content;
   * we just wanted to give you a quick view of your config.
   */

   componentDidMount(){
      console.log(this.props.items);
   }
 render(){
    return (
      <View style={styles.container}>

        <View style={styles.userInfo}>
          <View style={styles.left}>
            <Avatar size="medium" rounded title="U" />
          </View>

          <View style={styles.right}>
            <Text style={styles.font}>Dieu Linh Truong </Text>
            <Text style={styles.font}>dieulinhtruong@gmail.com </Text>
          </View>
        </View>

        <View style={styles.point}>
          <Icon  name="star" type="font-awesome" color="#FF9933" />
          <Text style={styles.pointDetail}>128</Text>
        </View>

        <View style={styles.userSetting}>
          <View style={styles.left}>
            <Icon  name="cogs" type="font-awesome" color="#199EFF" />
          </View>
          <View style={styles.right}>
            <Text style={styles.font}>Cài đặt</Text>
          </View>
        </View>
        <View style={styles.userSetting}>
          <View style={styles.left}>
            <Icon  name="exchange" type="font-awesome" color="#199EFF" />
          </View>
          <View style={styles.right}>
            <Text style={styles.font}>Đổi mật khẩu</Text>
          </View>
        </View>
        <View style={styles.userSetting}>
          <View style={styles.left}>
            <Icon  name="sign-out" type="font-awesome" color="#199EFF" />
          </View>
          <View style={styles.right}>
            <Text style={styles.font}>Đăng xuất</Text>
          </View>
        </View>

        <View style={styles.userSetting}>
          <View style={styles.left}>
            <Icon  name="phone" type="font-awesome" color="#199EFF" />
          </View>
          <View style={styles.right}>
            <Text style={styles.font}>Hỗ trợ</Text>
          </View>
        </View>
        
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




const mapStateToProps = state =>({
  items : state.items

})



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

export default connect(mapStateToProps)(PersonalScreen);
