import { SearchBar } from 'react-native-elements';
import React from "react";
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,   
  } from 'react-native';
export default function VerticalProduct(props) {
        const {itemData} = props;
        return (
                        <View style={styles.Item}>
                                <Image
                            style={{ width: 90, height: 90 }}
                            source={ {uri:{}}}
                                />
                                <View style={styles.info}>
                                        <Text style={styles.infoName}>
                                            {itemData.name}
                                        </Text>
                                        <View>
                                            <Text style={styles.infoPrice}> {itemData.infoPrice}</Text>
                                            <Text style={styles.infoDiscount}> {itemData.infoDiscount}</Text>
                                        </View>
                                    </View> 
                        </View>

         );
    }          
const styles = StyleSheet.create({
    componentI: {
            marginTop:10,
              backgroundColor: '#ffffff',
              //borderRadius:50,
              flexDirection: "row",
              justifyContent:'space-around',
              alignItems: 'center',

            },
            Item:
            {
                flexDirection:"column"
            },
            container: {
                marginTop:20,
                padding:7,
              backgroundColor: '#ffffff',
              //borderRadius:50,
              flexDirection: "column",
            justifyContent:"space-between",

            },
            infoName: {
                fontSize: 15,
                fontWeight: "bold",
                overflow: "hidden"
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
            info: {
                //flex:0.7,
                flexDirection: "column",
                justifyContent:"space-between"
              },
            top:{
                flex:0.2,
            },
            bot:{
                flex:0.7,
            },
            headerText:{
                fontSize: 16,
                fontWeight: "400",
                lineHeight:20,
            }
})

