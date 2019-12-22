import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image,Button} from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { LinearGradient } from "expo-linear-gradient";
import { Icon } from "react-native-elements";

export default class ItemDetails extends React.Component {
    render(){
        const navigation = this.props.navigation
        return (
        <View style={{flexDirection:'column'}}>
            <View style={styles.image}>
            <Image
                style={{ width: 150, height: 150 }}
                source={{
                uri:
                    "https://salt.tikicdn.com/cache/550x550/ts/product/41/e1/79/f4541de59d4c16cfd2d37797909540b2.jpg"
                }}
            />
            </View>
            <View style={styles.info}>
                <Text style={styles.infoName}>
                Máy Đọc Sách All New Kindle 2019
                </Text>
                <View>
                    <Text style={styles.infoPrice}> 2.000.000đ</Text>
                    <Text style={styles.infoDiscount}> 2.500.000đ</Text>
                </View>
            </View> 
            <View style={styles.btnGroup}>
                <View style={styles.groupBuying} onPress={() => navigation.navigate()}>
                <Icon
                name="shopping-cart"
                type="font-awesome"
                color="#199EFF"
                iconStyle={{paddingTop:5}}
                />
                <Button buttonStyle={styles.btn} size="large" type="outline" title="Mua"
                />
                </View>
                <Button buttonStyle={styles.btnReg} size="large" type="clear" sty titleStyle={{ color:"#fff"}} title="Theo Dõi"/>
                
          </View>


      </View>           
        );
} 
}
ItemDetails.navigationOptions = {
    title: "Sản phẩm",
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
      paddingTop: 15,

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
        color:"#fff"
      },
    
      btnGroup:{
        //flex: 0.35,
        marginTop:20,
        flexDirection:'row',
        alignSelf:'center',
        paddingVertical:30,
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
        flexDirection:'row',
        borderRadius: 25,
        width: 200,
      }
    });