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
import { Icon } from "react-native-elements";

import SearchEngie from '../components/SearchEngine'
import { MonoText } from '../components/StyledText';
import Search from "../components/Search"
import VerticalProduct from '../components/VerticalProduct'
import MostComparableProducts from '../components/MostComparableProducts'
import { LinearGradient } from 'expo-linear-gradient';
import { TextInput } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView>
            <View style={styles.componentI}>
              <View style={styles.containerSearching}>
                <Text style={styles.headerText}>Hot nhất</Text>
                <View style={styles.componentHotItem}>
                    <VerticalProduct />
                    <VerticalProduct/>
                    <VerticalProduct/>
                </View>
              </View>
              
              <View style={styles.containerMostComparable}>
                <Text style={styles.headerText}>Mới nhất</Text>
                <View style={styles.componentCover2Rows_Newest}>
                  <View style={styles.componentCover1Rows_Newest}>
                    <VerticalProduct/>
                    <VerticalProduct/>
                    <VerticalProduct/>
                  </View>

                  <View style={styles.componentCover1Rows_Newest}>
                    <VerticalProduct/>
                    <VerticalProduct/>
                    <VerticalProduct/>
                  </View>

                </View>
              </View>
            </View>
      </ScrollView>
  </View>
  );
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
