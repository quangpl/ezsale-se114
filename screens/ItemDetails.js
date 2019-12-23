import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image} from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { LinearGradient } from "expo-linear-gradient";
import { Icon } from "react-native-elements";
import {LineChart} from "react-native-chart-kit";
import { Button } from 'react-native-elements';
import {Dimensions} from 'react-native';

export default class ItemDetails extends React.Component {
 
    render(){
        const data = this.props.navigation.getParam("data");
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
              <Text style={styles.infoName}>{data.title}</Text>
              <View>
                <Text style={styles.infoPrice}> {data.price}đ</Text>
                <Text style={styles.infoDiscount}>{data.stock_price}đ</Text>
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
                  alert("Dẫn đến tiki link");
                }}
              />

              <Button
                buttonStyle={styles.btnReg}
                size="large"
                type="clear"
                title="Theo Dõi"
                onPress={() => {
                  alert(
                    "Nếu chưa đăng nhập thì đăng nhập, đăng nhập rồi thì xài api theo dõi"
                  );
                }}
              />
            </View>
            <View>
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
            </View>
          </View>
        );
} 
}
ItemDetails.navigationOptions = {
    header: null
  };
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 15,

    },
    btn: {
        borderRadius: 25,
        width: 150,
        alignSelf: "center",
        borderWidth:2,
        alignContent:'space-between',
        backgroundColor:"#189DFF",
      },
      btnReg:{
        borderRadius: 25,
        width: 150,
        alignSelf: "center",
        //marginTop:20,
        borderWidth:2,
        marginLeft:30
      },
    
      btnGroup:{
        //flex: 0.35,
        marginTop:20,
        flexDirection:'row',
        alignSelf:'center',
        paddingHorizontal:50,
        alignContent:'space-between',
      },
      image: {
        alignSelf:'center',
        paddingTop:30,
      },
      info: {
        flexDirection: "column",
        justifyContent: "space-between",
        alignSelf:'center',
      },
      infoName: {
        fontSize: 17,
        fontWeight: "400",
        overflow: "hidden",
        marginBottom:8,
        alignSelf:'center',

      },
      infoPrice: {
        fontSize: 13,
        color: "#FF7C71",
        fontWeight: "bold",
        alignSelf:'center',

      },
      infoDiscount: {
        fontSize: 13,
        color: "#BEBEBE",
        textDecorationLine: "line-through",
        alignSelf:'center',


      },
      groupBuying:
      {
        //flexDirection:'row',
        borderRadius: 25,
        //width: 200,
      }
    });