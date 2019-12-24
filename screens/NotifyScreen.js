import React from "react";
import { ExpoConfigView } from "@expo/samples";
import { ScrollView, StyleSheet, Text, FlatList,Alert } from "react-native";
import data from "../mock-db/db.json"
import { LinearGradient } from "expo-linear-gradient";
import { withNavigationFocus } from "react-navigation";
import {connect} from "react-redux";
import axios from "axios";
import TextItem from "../components/TextItem";
import Notification from "../components/Notification";
class NotifyScreen extends React.Component {
  /**
   * Go ahead and delete ExpoConfigView and replace it with your content;
   * we just wanted to give you a quick view of your config.
   */
  constructor(props) {
    super(props);
    this.state = {
      NotifyScreen: [],
      items: [],
      user: {}
    };
  }
  componentDidMount() {
   console.log(data);
      this.setState({
        NotifyScreen: data
      });
  }
  componentDidUpdate(prevProps) {
    if (this.props.isFocused) {
      console.log(this.props.user.authInfo);
        if (!this.props.user.authInfo) {
          Alert.alert("Thông báo","Vui lòng đăng nhập để sử dụng tính năng này");
          this.props.navigation.navigate("Login");
          return false;
        }
    }
  }
  static navigationOptions = {
  title: "Thông báo",
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

  render() {
    const { NotifyScreen } = this.state;
    return (
      <ScrollView style={styles.container}>
        <Notification
          type="down"
          title="Smart Tivi Samsung 49 inch UHD 4K UA49NU7100KXXV - Hàng chính hãng"
          detail="500000"
        />
        <Notification
          type="up"
          title="Máy Giặt Cửa Trước Samsung Inverter Addwash WW85K54E0UW/SV (8.5kg) - Hàng Chính Hãng"
          detail="250000"
        />
        <Notification
          type="down"
          title="Smart Tivi Samsung 49 inch UHD 4K UA49NU7100KXXV - Hàng chính hãng"
          detail="500000"
        />
        <Notification
          type="up"
          title="Máy Giặt Cửa Trước Samsung Inverter Addwash WW85K54E0UW/SV (8.5kg) - Hàng Chính Hãng"
          detail="250000"
        />
        <Notification
          type="down"
          title="Smart Tivi Samsung 49 inch UHD 4K UA49NU7100KXXV - Hàng chính hãng"
          detail="500000"
        />
        <Notification
          type="up"
          title="Máy Giặt Cửa Trước Samsung Inverter Addwash WW85K54E0UW/SV (8.5kg) - Hàng Chính Hãng"
          detail="250000"
        />
        <Notification
          type="down"
          title="Smart Tivi Samsung 49 inch UHD 4K UA49NU7100KXXV - Hàng chính hãng"
          detail="500000"
        />
        <Notification
          type="up"
          title="Máy Giặt Cửa Trước Samsung Inverter Addwash WW85K54E0UW/SV (8.5kg) - Hàng Chính Hãng"
          detail="250000"
        />
        <Notification
          type="down"
          title="Smart Tivi Samsung 49 inch UHD 4K UA49NU7100KXXV - Hàng chính hãng"
          detail="500000"
        />
        <Notification
          type="up"
          title="Máy Giặt Cửa Trước Samsung Inverter Addwash WW85K54E0UW/SV (8.5kg) - Hàng Chính Hãng"
          detail="250000"
        />
        <Notification
          type="down"
          title="Smart Tivi Samsung 49 inch UHD 4K UA49NU7100KXXV - Hàng chính hãng"
          detail="500000"
        />
        <Notification
          type="up"
          title="Máy Giặt Cửa Trước Samsung Inverter Addwash WW85K54E0UW/SV (8.5kg) - Hàng Chính Hãng"
          detail="250000"
        />
        <Notification
          type="down"
          title="Smart Tivi Samsung 49 inch UHD 4K UA49NU7100KXXV - Hàng chính hãng"
          detail="500000"
        />
        <Notification
          type="up"
          title="Máy Giặt Cửa Trước Samsung Inverter Addwash WW85K54E0UW/SV (8.5kg) - Hàng Chính Hãng"
          detail="250000"
        />
        <Notification
          type="down"
          title="Smart Tivi Samsung 49 inch UHD 4K UA49NU7100KXXV - Hàng chính hãng"
          detail="500000"
        />
        <Notification
          type="up"
          title="Máy Giặt Cửa Trước Samsung Inverter Addwash WW85K54E0UW/SV (8.5kg) - Hàng Chính Hãng"
          detail="250000"
        />
      </ScrollView>
    );
  }
}
const mapStateToProps = state => ({
  items: state.items,
  user:state.user
});
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff"
  }
});
export default connect(mapStateToProps)(withNavigationFocus(NotifyScreen));

