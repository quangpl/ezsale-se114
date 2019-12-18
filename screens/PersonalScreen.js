import React from "react";
import { Text } from "react-native";
import { ExpoConfigView } from "@expo/samples";
import {connect} from "react-redux";
class PersonalScreen extends React.Component {
  /**
   * Go ahead and delete ExpoConfigView and replace it with your content;
   * we just wanted to give you a quick view of your config.
   */

   componentDidMount(){
      console.log(this.props.items);
   }
 render(){
    return (
      <Text
        style={{
          fontSize: 18,
          color: "blue"
        }}
      >
        Nội dung của trang cá nhân
        {this.props.items[0].name}
      </Text>
    );
 }
}

const mapStateToProps = state =>({
  items : state.items

})

PersonalScreen.navigationOptions = {
  title: "Cá nhân"
};

export default connect(mapStateToProps)(PersonalScreen);
