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
import SearchEngie from '../components/SearchEngine'
import { MonoText } from '../components/StyledText';
import Search from "../components/Search"
import Topsearching from '../components/TopSearching'
import MostComparableProducts from '../components/MostComparableProducts'
import { LinearGradient } from 'expo-linear-gradient';
import { TextInput } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView>
            {/* <Search/> */}
            {/* <View style={{ flex:1,height: 60 }}>
                  <LinearGradient
                colors={['#237AE4', '#6C5CE7']}
                style={{ flex: 1 }}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}><TextInput style={{
                  backgroundColor:"white",
                  borderRadius:20,
                  height:30,
                  borderWidth:0,
                  paddingLeft:10,
                  marginTop:5
                }}></TextInput></LinearGradient>
                
            </View> */}

            <View style={styles.componentI}>
              <Topsearching/>
              <MostComparableProducts/>
            </View>
      </ScrollView>
  </View>
  );
}

HomeScreen.navigationOptions = {
  headerStyle: {
    backgroundColor: '#199eff',
  },
  headerTitle:()=>(
    <View style={{
      flexDirection:"column"
    }}>
    {/* <Text style={styles.headerStyle}>Trang chủ</Text> */}
    <TextInput style={{
      backgroundColor:"white",
      borderRadius:20,
      height:25,
      width:300,
      borderWidth:0,
      paddingLeft:10,
      marginTop:3
    }}></TextInput>
    </View>
  ),
  headerBackground:(
    <LinearGradient
      colors={['#237AE4', '#6C5CE7']}
      style={{ flex: 1,
      borderWidth:0}}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
    />),
  headerStyle:{
   height:100,
    },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
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


  }
  
});
