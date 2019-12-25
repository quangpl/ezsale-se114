import * as WebBrowser from 'expo-web-browser';
import { AsyncStorage, TouchableHighlight } from "react-native";
import { Notifications } from "expo";
import ProductService from "../services/products"
import AddProduct from "../components/AddProduct"
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator
} from "react-native";
import { connect } from "react-redux";
import registerForPushNotificationsAsync from "../services/fcm";

import Carousel from 'react-native-snap-carousel';

import { Icon,Button } from "react-native-elements";
import axios from "axios";
import SearchEngie from '../components/SearchEngine'
import { MonoText } from '../components/StyledText';
import Search from "../components/Search"
import VerticalProduct from '../components/VerticalProduct'
import { LinearGradient } from 'expo-linear-gradient';
import { TextInput } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Col, Row, Grid } from "react-native-easy-grid";
import {LoginScreen} from '../screens/LoginScreen';
import { createStackNavigator } from 'react-navigation-stack';

import store from "../store"
import {addItem, login, auth} from "../store/actions"
import UserService from "../services/user"
class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productsNew: [],
      productsHot: [],
      isLogin: false,
      isLoad: true,
      page: 1
    };
    const _this=this;
  }

  _renderItem = ({ item, index }) => {
    return <VerticalProduct key={item.id} itemData={item} />;
  };

  async componentDidMount() {
    this.props.navigation.addListener('didFocus',()=>{
      console.log("focus");
    })
    const token = await AsyncStorage.getItem("token");
    if (token) {
      const user = new UserService();
      const authInfo = await user.auth();
      store.dispatch(auth(authInfo));
     // await registerForPushNotificationsAsync(token); //turn on notify
    }
    const productService = new ProductService();
    const hotProducts = await productService.getHotProducts();
    const NewProducts = await productService.getNewProducts({
      page: this.state.page,
      perpage: 12
    }); //default 12

    await this.setState({
      productsHot: hotProducts,
      productsNew: NewProducts
    });

    await this.setState({
      isLoad: false
    });
    this._notificationSubscription = Notifications.addListener(
      this._handleNotification
    );
  }

  _handleNotification = notification => {
    console.log(notification);
  };

  onPress = () => {
    console.log("pp");
  };
  _onPressProduct(item) {
    this.props.navigation.navigate("Detail", { value: item });
  }

  render() {
    const { productsHot, productsNew } = this.state;
    const navigation = this.props.navigation;
    return (
      <View style={styles.container}>
        {!this.state.isLoad ? (
          <>
            <ScrollView>
              <View style={styles.componentI}>
                <View style={styles.containerSearching}>
                  <Text style={styles.headerText}>Hot nhất</Text>
                  <View style={styles.componentHotItem}>
                    {/* <VerticalProduct />
                    <VerticalProduct/>
                    <VerticalProduct/> */}
                    <Carousel
                      ref={c => {
                        this._carousel = c;
                      }}
                      data={this.state.productsHot}
                      renderItem={({ item }) => (
                        <View style={styles.wrapper}>
                          <VerticalProduct
                            onPressProduct={() => {
                              this._onPressProduct(item);
                            }}
                            itemData={item}
                          />
                        </View>
                      )}
                      sliderWidth={300}
                      itemWidth={100}
                    />
                    {/* <FlatList
                    data={productsHot}
                    renderItem={({item})=><VerticalProduct itemData={item}/>}
                    keyExtractor={item=>`${productsHot.id}`}
                    contentContainerStyle={{marginTop:10, backgroundColor: '#ffffff',flexDirection: "row",justifyContent:'space-around',alignItems: 'center',}}
                    /> */}
                  </View>
                </View>

                <View style={styles.containerMostComparable}>
                  <Text style={styles.headerText}>Mới nhất</Text>
                  <FlatList
                    data={productsNew}
                    keyExtractor={item => {
                      return item._id;
                    }}
                    columnWrapperStyle={styles.containerFlat} //has to be unique
                    renderItem={({ item }) => (
                      <View style={styles.wrapper}>
                        <VerticalProduct
                          onPressProduct={() => {
                            this._onPressProduct(item);
                          }}
                          itemData={item}
                        />
                      </View>
                    )} //method to render the data in the way you want using styling u need
                    horizontal={false}
                    numColumns={3}
                    onEndReachedThreshold={0.1}
                  />
                </View>
              </View>
            </ScrollView>
          </>
        ) : (
          <ActivityIndicator size="large" color="#199EFF" />
        )}
      </View>
    );
  }
}

HomeScreen.navigationOptions = {
  headerStyle: {
    backgroundColor: "#199eff"
  },
  headerTitle: () => <AddProduct/>,
  headerBackground: (
    <LinearGradient
      colors={["#237AE4", "#6C5CE7"]}
      style={{ flex: 1, borderWidth: 0 }}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
    />
  ),
  headerStyle: {
    height: 50
  },
  headerTintColor: "#fff",
  headerTitleStyle: {
    fontWeight: "bold"
  }
};
export default connect()(HomeScreen);

const styles = StyleSheet.create({
  container: {
    //flex: 0.5,
    backgroundColor: '#E5E5E5',
    justifyContent:'space-between',
    //flex:1,
  },
  componentI:
  {
    justifyContent:'space-between',

  },
  scrollView:
  {
    flex:1,
    flexDirection:"column"
  },
  headerStyle:
  {
    justifyContent:'center',
    fontSize: 20,
    fontWeight: "bold",
    overflow: "hidden",
    alignContent:"center",
    alignSelf:"center",


  },
componentHotItem: {
    marginTop:10,
          backgroundColor: '#ffffff',
          //borderRadius:50,
          flexDirection: "row",
      justifyContent:'space-around',
      alignItems: 'center',

        
    },
  containerSearching: {
      marginTop:20,
      padding:7,
          backgroundColor: '#ffffff',
          //borderRadius:50,
          flexDirection: "column",
  justifyContent:"space-between",

        },
    headerText:{
    fontSize: 16,
    fontWeight: "400",
    lineHeight:20,
    },
    containerMostComparable: {
      padding:10,
      marginTop: 7,
      backgroundColor: '#ffffff',
      //borderRadius:50,
      flexDirection: "column",
      justifyContent: "space-between",

    },
    componentCover2Rows_Newest: {
      flexDirection: "column",

  },
  componentCover1Rows_Newest: {
    marginTop:10,
    backgroundColor: '#ffffff',
    //borderRadius:50,
    flexDirection: "row",
    justifyContent: 'space-around',
    alignItems: 'center',

},
wrapper:{
  flex:1,
  paddingHorizontal:8,
  zIndex:2,
},
containerFlat:{
paddingHorizontal:8,
paddingVertical: 10
}
  
});
