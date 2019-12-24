import React from 'react';
import { ScrollView, StyleSheet, Text,Alert } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { LinearGradient } from "expo-linear-gradient";
import {connect} from "react-redux";
import HorizontalItem from "../components/HorizontalItem";
import { withNavigationFocus } from "react-navigation";
import { FlatList } from 'react-native-gesture-handler';


export default class FollowScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state={
        products:[],
        items: [],
        user: {}
        
    };
  }
  componentDidUpdate(prevProps) {
    if (this.props.isFocused) {
      console.log(this.props.user.authInfo);
        if (!this.props.user.authInfo) {
          Alert.alert("Thông báo","Vui lòng đăng nhập để sử dụng tính năng này");
          this.props.navigation.navigate("Login");
          return false;
        }
    }
  }
  async componentDidMount(){
    const token = await AsyncStorage.getItem("token");
    if(token){
      const user = new UserService();
      const authInfo = await user.auth();
      store.dispatch(auth(authInfo));
      const productService = new  ProductService();
      const productData = await productService.getFollowingByToken(token)
      await this.setState({
        products:productData,
      });
    }

 
  }
  _onPressProduct(item){
    this.props.navigation.navigate("Detail",{value:item});
  }
  
  render(){
  return (
    
    <ScrollView style={styles.container}>
        <FlatList
                  data={products}
                  keyExtractor={item => {
                    return item._id;
                  }}
                  contentContainerStyle={styles.containerFlat} //has to be unique
                  renderItem={({ item }) => (
                  <HorizontalItem
                    onPressProduct={()=>{
                      this._onPressProduct(item);
                    }}
                    itemData={item}
                  />
                  )} //method to render the data in the way you want using styling u need
                  />
    </ScrollView>
  );
  }
}

// const mapStateToProps = state => ({
//   items: state.items,
//   user:state.user
// });

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
  },

});
// export default connect(mapStateToProps)(withNavigationFocus(FollowScreen));
