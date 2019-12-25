import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image,Linking,Alert,ToastAndroid} from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { LinearGradient } from "expo-linear-gradient";
import { Icon } from "react-native-elements";
//import {LineChart} from "react-native-chart-kit";
import { Button } from 'react-native-elements';
import {Dimensions} from 'react-native';
import { TextInput } from 'react-native';
import {connect} from "react-redux";
import { withNavigationFocus } from "react-navigation";
import ProductService from "../services/products"
import numeral from 'numeral'

class ItemDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state={
        items: [],
        user: {},
        isLogin:false,
    };
  }
  changCurrent=(str)=>
  {
    str = numeral(str).format('0,0');
    return str;
  }
  followItem = async (data)=>
  {
    console.log("click");
          if (this.props.isFocused) {
              if (!this.props.user.authInfo) {
                Alert.alert("Thông báo","Vui lòng đăng nhập để sử dụng tính năng này");
                this.props.navigation.navigate("Login");
                return false;
              }
              else
              {
                const productService = new ProductService();
                const result_following = await productService.followProduct({
                  token: this.props.user.authInfo.payload.token,
                  productId: data._id
                });
                if(result_following)
                {
                  ToastAndroid.showWithGravity(
                    "Sản phẩm này đã có trong danh sách theo dõi!",
                    ToastAndroid.SHORT,
                    ToastAndroid.CENTER,
                    
                  );
                  return false;
                }
                else{
                 ToastAndroid.showWithGravity(
                   "Sản phẩm đã được theo dõi",
                   ToastAndroid.SHORT,
                   ToastAndroid.CENTER
                 );
                }

              }
            }
          
  }

    render(){
        const data = this.props.navigation.getParam("value"); //this,props.data

        const line = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
                strokeWidth: 2, // optional
              },
            ],
          };
        return (
          <View
            style={{
              flexDirection: "column",
              alignContent: "space-between",
              paddingTop: 30
            }}
          >
            <View style={styles.image}>
              <Image
                style={{ width: 150, height: 150 }}
                source={{
                  uri: data.image
                }}
              />
            </View>
            <View style={styles.info}>
              <Text style={styles.infoName}>
                {data.title}
                <Text style={styles.discount}>-{data.discount_rate}%</Text>
              </Text>

              <View>
                <Text style={styles.infoPrice}> {this.changCurrent(data.price)}đ</Text>
                <Text style={styles.infoDiscount}>{this.changCurrent(data.stock_price)}đ</Text>
              </View>
            </View>
            <View style={styles.btnGroup}>
              <Button
                icon={
                  <Icon
                    name="shopping-cart"
                    type="font-awesome"
                    color="#fff"
                    iconStyle={{ paddingBottom: 5, paddingRight: 5 }}
                  />
                }
                iconLeft
                buttonStyle={styles.btn}
                size="large"
                type="outline"
                title="Mua"
                titleStyle={{ color: "#fff" }}
                onPress={() => {
                  Linking.openURL(`${data.url}`);
                }}
              />

              <Button
                icon={
                  <Icon
                    name="plus"
                    type="font-awesome"
                    color="#189DFF"
                    iconStyle={{ paddingRight: 5 }}
                  />
                }
                buttonStyle={styles.btnReg}
                size="large"
                type="clear"
                title="Theo Dõi"
                onPress={() => {
                  this.followItem(data);
                }
                }
              /> 
            </View>
            {/* <View>
              <LineChart
                data={{
                  labels: [
                    "January",
                    "February",
                    "March",
                    "April",
                    "May",
                    "June"
                  ],
                  datasets: [
                    {
                      data: [
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100
                      ]
                    }
                  ]
                }}
                width={Dimensions.get("window").width} // from react-native
                height={230}
                yAxisLabel={"$"}
                yAxisSuffix={"k"}
                chartConfig={{
                  //backgroundColor: "#e26a00",
                  backgroundGradientFrom: "#0895fc",
                  backgroundGradientTo: "#61bcff",
                  decimalPlaces: 2, // optional, defaults to 2dp
                  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                  labelColor: (opacity = 1) =>
                    `rgba(255, 255, 255, ${opacity})`,
                  style: {
                    //borderRadius: 16
                  },
                  propsForDots: {
                    r: "6",
                    strokeWidth: "2",
                    stroke: "#ffa726"
                  }
                }}
                bezier
                style={{
                  marginVertical: 8,
                  //borderRadius: 16,
                  marginTop: 20
                }}
              />
            </View> */}
          </View>
        );
} 
}
ItemDetails.navigationOptions = {
  title: "Chi tiết sản phẩm",

  headerStyle: {
    backgroundColor: "#199eff"
  },
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

const mapStateToProps = state => ({
  items: state.items,
  user:state.user
});
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 15
    },
    btn: {
      borderRadius: 25,
      width: 150,
      alignSelf: "center",
      borderWidth: 2,
      alignContent: "space-between",
      backgroundColor: "#189DFF"
    },
    btnReg: {
      borderRadius: 25,
      width: 150,
      alignSelf: "center",
      //marginTop:20,
      borderWidth: 2,
      marginLeft: 30
    },

    btnGroup: {
      //flex: 0.35,
      marginTop: 20,
      flexDirection: "row",
      alignSelf: "center",
      paddingHorizontal: 50,
      alignContent: "space-between"
    },
    image: {
      alignSelf: "center",
      paddingTop: 30
    },
    info: {
      flexDirection: "column",
      justifyContent: "space-between",
      alignSelf: "center"
    },
    infoName: {
      fontSize: 17,
      fontWeight: "400",
      overflow: "hidden",
      marginBottom: 8,
      alignSelf: "center",
      padding: 20
    },
    discount: {
      fontSize: 15,
      fontWeight: "400",
      overflow: "hidden",
      padding: 20,
      color:"red",
      marginLeft:80,
    },
    infoPrice: {
      fontSize: 13,
      color: "#FF7C71",
      fontWeight: "bold",
      alignSelf: "center"
    },
    infoDiscount: {
      fontSize: 13,
      color: "#BEBEBE",
      textDecorationLine: "line-through",
      alignSelf: "center"
    },
    groupBuying: {
      //flexDirection:'row',
      borderRadius: 25
      //width: 200,
    }
  });
    export default connect(mapStateToProps)(withNavigationFocus(ItemDetails));
