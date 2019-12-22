import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import Carousel from 'react-native-snap-carousel';

import { Icon } from "react-native-elements";
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
var isLogin=true;
export default class HomeScreen extends React.Component{
  static navigationOptions= ({navigation}) =>{
    return{
      isLogin:navigation.getParam('value')};
    };

  constructor(props) {
    super(props);
    this.state={
        productsNew:[],
        productsHot:[]
    };
  }

  _renderItem = ({item, index}) => {
    return (
      <VerticalProduct key={item.id} itemData={item}/>
    );
}

  componentDidMount(){
    console.log("init");
    axios.get('http://localhost:3000/Hot')
    .then(res=>{
      console.log(res.data);
      this.setState({
        productsHot:res.data
      })
    })
    .catch(error => {
      console.error(error);
      })

    axios.get('http://localhost:3000/New')
      .then(res=>{
        this.setState({
          productsNew:res.data
        })
      })
      .catch(error => {
        console.error(error);
        })
    }

  render(){
  const{productsHot, productsNew}=this.state;
  if(isLogin)
  {
  return (
    <View style={styles.container}>
      <ScrollView>
            <View style={styles.componentI}>
              <View style={styles.containerSearching}>
                <Text style={styles.headerText}>Hot nhất</Text>
                <View style={styles.componentHotItem}>
                    {/* <VerticalProduct />
                    <VerticalProduct/>
                    <VerticalProduct/> */}
                     <Carousel
              ref={(c) => { this._carousel = c; }}
              data={this.state.productsHot}
              renderItem={this._renderItem}
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
                <View style={styles.componentCover2Rows_Newest}>
                      <Grid>
                      
                          {/* {this.state.productsHot.map(item=>{
                            return (
                              <Col><VerticalProduct key={item.id} itemData={item}/></Col>
                            )
                          })} */}
                         <Row size={1}>
                           {this.state.productsNew.map(e=>{
                             return (
                              <Col size={3} style={{
                                backgroundColor:"red"
                              }}><Text>asas</Text>
                              <VerticalProduct itemData={{
                                 "name":"May do sach",
                                 "infoPrice":350000,
                                 "infoDiscount": 25000,
                                 "url": "https://salt.tikicdn.com/cache/550x550/ts/product/41/e1/79/f4541de59d4c16cfd2d37797909540b2.jpg"
                              }}/>
                              </Col>
                             )
                           })}
                       </Row>
                      </Grid>
                </View>
              </View> 
            </View>
      </ScrollView>
  </View>
   );
  }
  else
  {
    <LoginScreen/>
  }
  }
 }

HomeScreen.navigationOptions = {
  headerStyle: {
    backgroundColor: "#199eff"
  },
  headerTitle: () => (
    <View
      style={{
        flexDirection: "row",
        width: "100%",
        padding: 10,
        alignContent:"center",
        alignItems:"center",
        justifyContent: "space-around"
      }}
    >
      <TextInput
        style={{
          backgroundColor: "white",
          borderRadius: 20,
          height: 25,
          borderWidth: 0,
          paddingLeft: 10,
          marginTop: 3,
          flex: 0.9
        }}
      ></TextInput>
      <Icon
        style={{
          flex:0.1
        }}
        name="plus"
        type="font-awesome"
        color="#fff"
        onPress={() => console.log("hello")}
      />
    </View>
  ),
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
  
});
