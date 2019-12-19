import * as WebBrowser from "expo-web-browser";
import React from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  InputAccessoryView
} from "react-native";
import { Icon, Overlay, Input, Button } from "react-native-elements";
import IconFont from "react-native-vector-icons/FontAwesome";

import SearchEngie from "../components/SearchEngine";
import { MonoText } from "../components/StyledText";
import Search from "../components/Search";
import Topsearching from "../components/TopSearching";
import MostComparableProducts from "../components/MostComparableProducts";
import { LinearGradient } from "expo-linear-gradient";
import { TextInput } from "react-native";

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false
    };
  }
  static onClickModal = () => {
    alert("dasd");
  };
  render() {
    return (
      <View style={styles.container}>
        {/* <Overlay
          isVisible={this.state.isVisible}
          windowBackgroundColor="rgba(255, 255, 255, .5)"
          overlayBackgroundColor="#fff"
          width="auto"
          height="auto"
        >
          <Input
            placeholder="Nhập link sản phẩm"
            inputContainerStyle={{
              height: 100,
              width: "100%"
            }}
          />
          <Button
            icon={<IconFont name="check" size={15} color="white" />}
            title="Hoàn tất"
            style={{width:20}}
          />
        </Overlay> */}
        <ScrollView>
          <View style={styles.componentI}>
            <Topsearching />
            <MostComparableProducts />
          </View>
        </ScrollView>
      </View>
    );
  }
}

HomeScreen.navigationOptions = {
  headerStyle: {
    backgroundColor: "#199eff"
  },
  headerTitle: () => (
    <View
      style={{
        flexDirection: "row",
        width: "100%",
        padding: 10,
        alignContent: "center",
        alignItems: "center",
        justifyContent: "space-around"
      }}
    >
      <TextInput
        style={{
          backgroundColor: "white",
          borderRadius: 20,
          height: 25,
          borderWidth: 0,
          paddingLeft: 10,
          marginTop: 3,
          flex: 0.9
        }}
      ></TextInput>
      <Icon
        style={{
          flex: 0.1
        }}
        name="plus"
        type="font-awesome"
        color="#fff"
        onPress={() => {
          HomeScreen.onClickModal();
        }}
      />
    </View>
  ),
  headerBackground: (
    <LinearGradient
      colors={["#237AE4", "#6C5CE7"]}
      style={{ flex: 1, borderWidth: 0 }}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
    />
  ),
  headerStyle: {
    height: 50
  },
  headerTintColor: "#fff",
  headerTitleStyle: {
    fontWeight: "bold"
  }
};

const styles = StyleSheet.create({
  container: {
    //flex: 0.5,
    backgroundColor: "#E5E5E5",
    justifyContent: "space-between"
    //flex:1,
  },
  componentI: {
    justifyContent: "space-between"
  },
  scrollView: {
    flex: 1,
    flexDirection: "column"
  },
  headerStyle: {
    justifyContent: "center",
    fontSize: 20,
    fontWeight: "bold",
    overflow: "hidden",
    alignContent: "center",
    alignSelf: "center"
  }
});
