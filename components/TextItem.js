import React from "react";
import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import { ExpoLinksView } from "@expo/samples";
import { Ionicons } from "@expo/vector-icons";
import { Button } from "react-native-elements";
export default class TextItem extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.right}>
          <View style={styles.info}>
            <Text style={styles.infoName}>Chào mừng bạn</Text>
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
    flex: 0.7,
    flexDirection: "column",
    justifyContent: "space-between"
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
    flexDirection: "row",
    flex: 0.7,
    alignContent: "center",
    alignItems: "center"
  },
  action: {
    flex: 0.3
  }
});
