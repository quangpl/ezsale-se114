import React from "react";
import { ScrollView, StyleSheet, Text, View, Image, TextInput,ToastAndroid, Alert } from "react-native";
import { ExpoLinksView } from "@expo/samples";
import { Ionicons } from "@expo/vector-icons";
import { Button } from "react-native-elements";
import { connect } from "react-redux";

import { Icon } from "react-native-elements";
import ProductService from "../services/products"
 class AddProduct extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            url:""
        }
    }

    onSubmit= async ()=>{

        if(!this.state.url){
              ToastAndroid.showWithGravity(
                "Thông tin bạn nhập chưa đẩy đủ",
                ToastAndroid.SHORT,
                ToastAndroid.CENTER
              );
              return false;
        }
        const productService = new ProductService();
        if (!this.props.user.authInfo.payload._id) {
        ToastAndroid.showWithGravity(
          "Bạn cần phải đăng nhập để sử dụng chức năng này",
          ToastAndroid.SHORT,
          ToastAndroid.CENTER
        );
          return false;
        }
           const res = await productService.addProduct({
             token: this.props.user.authInfo.payload.token,
             url: this.state.url
           });
           console.log(res);
          if (res.error) {
            ToastAndroid.showWithGravity(
              "Có lỗi xảy ra vui lòng thử lại",
              ToastAndroid.SHORT,
              ToastAndroid.CENTER
            );
            return false;
          } else {
            ToastAndroid.showWithGravity(
              "Thêm sản phẩm thành công",
              ToastAndroid.SHORT,
              ToastAndroid.CENTER
            );
            return true;
          }
    }
  render() {
    return (
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
        placeholder="Link sản phẩm bạn muốn theo dõi"
          style={{
            backgroundColor: "white",
            borderRadius: 20,
            height: 30,
            borderWidth: 0,
            paddingLeft: 10,
            marginTop: 3,
            marginBottom:3,
            flex: 0.9
          }}
          onChangeText={text => {
            console.log(text);
            this.setState({
              url: text
            });
          }}
        ></TextInput>
        <Icon
          style={{
            flex: 0.1
          }}
          name="plus"
          type="font-awesome"
          color="#fff"
          onPress={() => this.onSubmit()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    padding: 6,
    backgroundColor: "#fff",
    borderBottomColor: "#dee2e6",
    borderBottomWidth: 1
  },
  left: {
    flex: 0.3
  },
  info: {
    flex: 0.75,
    flexDirection: "column",
    justifyContent: "space-between"
  },
  infoName: {
    fontSize: 15,
    fontWeight: "400",
    overflow: "hidden",
    marginBottom: 8
  },
  infoPrice: {
    fontSize: 13,
    color: "#FF7C71",
    fontWeight: "bold"
  },
  infoDiscount: {
    fontSize: 13,
    color: "#BEBEBE",
    textDecorationLine: "line-through"
  },
  right: {
    flexDirection: "row",
    flex: 0.7,
    alignContent: "center",
    alignItems: "center"
  },
  action: {
    flex: 0.25
  }
});
const mapStateToProps = state => ({
  items: state.items,
  user:state.user
});


export default connect(mapStateToProps)(AddProduct);