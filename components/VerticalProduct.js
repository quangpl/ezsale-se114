import { SearchBar } from "react-native-elements";
import numeral from 'numeral'
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
  componentDidMount(){
    console.log(this.props.navigation);
  }
  render() {
    const {itemData} = this.props;
    // const data = this.props.navigation.getParam("value");
    return (
      <TouchableOpacity
        onPress={(itemData) => {
         this.props.onPressProduct(itemData);
        }}
      >
        <View style={styles.Item}>
          <Image
            style={{ width: 90, height: 90 }}
            source={{ uri: itemData.image }}
          />
          <View style={styles.info}>
            <Text style={styles.infoName}>{this.stringprocess(itemData.title)}</Text>
            <View>
              <Text style={styles.infoPrice}> {this.changCurrent(itemData.price)}đ</Text>
              <Text style={styles.infoDiscount}>{this.changCurrent(itemData.stock_price)}đ</Text>
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
    margin:5,
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
    fontWeight: '300',
    overflow: "hidden",
    alignSelf:'center',
    //height: 25,
    width:95,
    height:48,
    //flexShrink:1
    
  },
  infoPrice: {
    fontSize: 11,
    color: "#FF7C71",
    fontWeight: "bold",
    //alignSelf:'center'
    textAlign:'left',

  },
  infoDiscount: {
    fontSize: 11,
    color: "#BEBEBE",
    textDecorationLine: "line-through",
    //alignSelf:'center'
    textAlign:'left',
    marginLeft:2

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
