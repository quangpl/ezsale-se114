import React from "react";
import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import { ExpoLinksView } from "@expo/samples";
import { Ionicons } from "@expo/vector-icons";
import { Button } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
export default function HorizontalItem(props) {
  const { notification } = props;
  {
    return (
      <TouchableOpacity>
        <View style={styles.container}>
          <Text style={styles.infoName}>{notification.text}</Text>
          <Text style={styles.infoPrice}>{notification.textDetail}</Text>
        </View>
      </TouchableOpacity>
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
  infoName: {
    fontSize: 15,
    fontWeight: "bold",
    overflow: "hidden"
  },
  infoPrice: {
    fontSize: 13,
    color: "#FF7C71",
    fontWeight: "bold"
  }
});
