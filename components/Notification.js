import React from "react";
import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import { ExpoLinksView } from "@expo/samples";
import { Icon } from "react-native-elements";

import { Button } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
export default class HorizontalItem extends React.Component {
  getIconByType = type => {
    switch (type) {
      case "down":
        return {
          name: "arrow-down",
          color: "#57B96B",
          symbol:"-"
        };
        break;
      case "up":
        return {
          name: "arrow-up",
          color: "#F66256",
          symbol: "+"
        };
        break;
      default:
        return {
          name: "bell",
          color: "#3399FF",
          symbol: ""
        };
        break;
    }
  };
  render() {
    {
      return (
        <View style={styles.container}>
          <View style={styles.left}>
            <Icon
              name={this.getIconByType(this.props.type).name}
              type="font-awesome"
              color={this.getIconByType(this.props.type).color}
            />
            <Text
              style={{
                alignSelf: "center",
                fontSize: 13,
                color: this.getIconByType(this.props.type).color
              }}
            >
              {this.getIconByType(this.props.type).symbol} {this.props.detail}
            </Text>
          </View>
          <View style={styles.right}>
            <Text style={styles.title}>{this.props.title}</Text>
          </View>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    height: 70,
    flexDirection: "row",
    borderBottomColor: "#EDF3F4",
    borderBottomWidth: 1
  },
  left: {
    flexDirection:"column",
    flex: 0.2,
    justifyContent: "space-around",
    alignContent: "center",
    alignItems: "center",
    textAlign:"center"
  },
  right: {
    flex: 0.8,
    flexDirection: "column",
    alignContent: "center",
    alignItems:"center",
    alignContent:"center"
  },
  title: {
    fontSize: 13,
    color: "#333333",
    marginTop: 4,
    overflow: "hidden"
  },
  detail: {

    alignItems: "flex-end",

    fontSize: 13
  }
});
