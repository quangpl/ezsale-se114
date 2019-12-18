import React from "react";
import { ExpoConfigView } from "@expo/samples";
import { ScrollView, StyleSheet, Text, FlatList } from "react-native";
import data from "../mock-db/db.json"
import axios from "axios";
import TextItem from "../components/TextItem";
import HorizontalItem from "../components/Notification";
export default class NotifyScreen extends React.Component {
  /**
   * Go ahead and delete ExpoConfigView and replace it with your content;
   * we just wanted to give you a quick view of your config.
   */
  constructor(props) {
    super(props);
    this.state = {
      NotifyScreen: []
    };
  }
  componentDidMount() {
   console.log(data);
      this.setState({
        NotifyScreen: data
      });
  }
  static navigationOptions = {
    title: "Thông báo"
  };

  render() {
    const { NotifyScreen } = this.state;
    return (
   <Text>{data.id}</Text>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  }
});
