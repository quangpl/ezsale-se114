import React from "react";
import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import { ExpoLinksView } from "@expo/samples";
import { Ionicons } from "@expo/vector-icons";
import { Button } from "react-native-elements";

export default class HorizontalItem extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.left}>
          <Image
            style={{ width: 90, height: 90 }}
            source={{
              uri:
                "https://salt.tikicdn.com/cache/550x550/ts/product/41/e1/79/f4541de59d4c16cfd2d37797909540b2.jpg"
            }}
          />
        </View>
        <View style={styles.right}>
          <View style={styles.info}>
            <Text style={styles.infoName}>
              Máy Đọc Sách All New Kindle 2019
            </Text>
            <View>
              <Text style={styles.infoPrice}> 2.000.000đ</Text>
              <Text style={styles.infoDiscount}> 2.500.000đ</Text>
            </View>
          </View>
          <View style={styles.action}>
            <Button
            style={{padding:5}}
              icon={
                <Ionicons name="md-cart" size={16} color="white" style={{margin:5}} />
              }
              title="Go Tiki"
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
    backgroundColor: "#fff"
  },
  left: {
    flex: 0.3
  },
  info: {
    flex:0.7,
    flexDirection: "column",
    justifyContent:"space-between"
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
  right: {
    flexDirection:"row",
    flex: 0.7,
    alignContent:"center",
    alignItems:"center"
  },
  action:{
    flex:0.3
  }
});
