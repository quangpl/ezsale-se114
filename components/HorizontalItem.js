import React from "react";
import { ScrollView, StyleSheet, Text, View, Image,Linking } from "react-native";
import { ExpoLinksView } from "@expo/samples";
import { Ionicons } from "@expo/vector-icons";
import { Button } from "react-native-elements";
import { Icon } from "react-native-elements";
import numeral from 'numeral'

export default class HorizontalItem extends React.Component {
  constructor(props) {
    super(props);
  }

  stringprocess=(str)=>{
    if(str.length>27){
      return str.substring(0,27)+"..."
    }
    else {
      return str;
    }
  }
  changCurrent=(str)=>
  {
    str = numeral(str).format('0,0');
    return str;
  }
  
  render() {
    const {itemData} = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.left}>
          <Image
            style={{ width: 90, height: 90 }}
            source={{
              uri:
              itemData.image
            }}
          />
        </View>
        <View style={styles.right}>
          <View style={styles.info}>
            <Text style={styles.infoName}>
            {this.stringprocess(itemData.title)}            
            </Text>
            <View>
            <Text style={styles.infoPrice}> {this.changCurrent(itemData.price)}đ</Text>
            <Text style={styles.infoDiscount}>{this.changCurrent(itemData.stock_price)}đ</Text>
            </View>
          </View>
          <View style={styles.action}>
            <Icon
              name="shopping-cart"
              type="font-awesome"
              color="#199EFF"
              onPress={() => {
                Linking.openURL(`${itemData.url}`);
              }}
            />
          </View>
        </View>
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
    borderBottomColor:"#dee2e6",
    borderBottomWidth:1,

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
    marginBottom:8
  },
  infoPrice: {
    fontSize: 13,
    color: "#FF7C71",
    fontWeight: "bold"
  },
  infoDiscount: {
    fontSize: 13,
    color: "#BEBEBE",
    textDecorationLine: "line-through",
    marginLeft:2

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
