import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { LinearGradient } from "expo-linear-gradient";
import {connect} from "react-redux";
import { withNavigationFocus } from "react-navigation";

import HorizontalItem from "../components/HorizontalItem";


class FollowScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state={
        products:[],
        items: [],
        user: {}
    };
  }
  componentDidMount(){
    if (this.props.isFocused) {
      console.log(this.props.user.authInfo);
        if (!this.props.user.authInfo) {
          alert("Vui lòng đăng nhập để sử dụng tính năng này");
          this.props.navigation.navigate("Login");
          return false;
        }
    }
    //const user = new UserService();

    //const productData = await productService.getProductsByID();

  }
  
  render(){
  return (
    
    <ScrollView style={styles.container}>
      <HorizontalItem />
      <HorizontalItem />
      <HorizontalItem />
      <HorizontalItem />
      <HorizontalItem />
      <HorizontalItem />
      <HorizontalItem />
      <HorizontalItem />
    </ScrollView>
  );
  }
}

const mapStateToProps = state => ({
  items: state.items,
  user:state.user
});

FollowScreen.navigationOptions = {
  title: "Theo dõi",
  headerTintColor:"white",
  headerBackground: (
    <LinearGradient
      colors={["#237AE4", "#6C5CE7"]}
      style={{ flex: 1, borderWidth: 0 }}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
    />
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#F8F9FA"
  }
});
export default connect(mapStateToProps)(withNavigationFocus(FollowScreen));
