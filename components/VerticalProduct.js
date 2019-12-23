import { SearchBar } from "react-native-elements";
import React from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
export default class VerticalProduct extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    console.log(this.props.navigation);
  }
  render() {
    const {itemData} = this.props;
    return (
      <TouchableOpacity
        onPress={() => {
          // this.props.navigation.navigate("Detail", {
          //   data: itemData
          // });
        }}
      >
        <View style={styles.Item}>
          <Image
            style={{ width: 90, height: 90 }}
            source={{ uri: itemData.image }}
          />
          <View style={styles.info}>
            <Text style={styles.infoName}>{itemData.title}</Text>
            <View>
              <Text style={styles.infoPrice}> {itemData.price}đ</Text>
              <Text style={styles.infoDiscount}>{itemData.stock_price}đ</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  componentI: {
    marginTop: 10,
    backgroundColor: "#ffffff", //borderRadius:50,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },
  Item: {
    flexDirection: "column"
  },
  container: {
    marginTop: 20,
    padding: 7,
    backgroundColor: "#ffffff", //borderRadius:50,
    flexDirection: "column",
    justifyContent: "space-between"
  },
  infoName: {
    fontSize: 13,
    fontWeight: "bold",
    overflow: "hidden",
    height: 25
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
    justifyContent: "space-between"
  },
  top: {
    flex: 0.2
  },
  bot: {
    flex: 0.7
  },
  headerText: {
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 20
  }
});
