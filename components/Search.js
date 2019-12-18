import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import { ExpoLinksView } from "@expo/samples";
import { Ionicons } from "@expo/vector-icons";
import { Button } from "react-native-elements";
import { SearchBar } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';
import React, { Component } from 'react';
import { TextInput} from 'react-native';
export default class HorizontalItem extends React.Component {
      state = {
              search: '',
            };  
            updateSearch = search => {
                this.setState({ search });
              };
    render() {
     const { search } = this.state;
         
    return (
        <View style={{backgroundColor:"blue", height:100}}>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderRadius:20,paddingLeft:10,backgroundColor:"white",marginTop:30}}
          onChangeText={text => onChangeText(text)}
          value={value}
        />
    </View>
                /* <View style={styles.LogoComponent}>
                <Image
                    style={styles.logo}
                    source={{
                        uri:
                            "https://brasol.vn/public/ckeditor/uploads/thiet-ke-logo-tin-tuc/logo-tiki-png.png"
                    }}
                />
                 <Image
                    style={styles.Logo2}
                    source={{
                        uri:
                            "https://pngimage.net/wp-content/uploads/2018/06/logo-shopee-png-3.png"
                    }}
                />
                 <Image
                    style={styles.logo}
                    source={{
                        uri:
                            "https://brasol.vn/public/ckeditor/uploads/thiet-ke-logo-tin-tuc/logo-tiki-png.png"
                    }}
                />
                </View> */
        );
    }
}

const styles = StyleSheet.create({
            container: {
              backgroundColor: '#ffffff',
              //borderRadius:50,
                flex:1,
              flexDirection: "column",
            },
            SearchEngie: {
            },
            logo:
            {
                //alignSelf: 'flex-end',
                width: '30%',
                height: '40%',
            },
            Logo2:
            {
                //alignSelf: 'flex-end',
                width: '30%',
                height: '100%',
                marginBottom:20
            },
            LogoComponent:
            {
                marginTop: 30,
                flexDirection: "row",
                justifyContent: 'center',
                flex:0.2,
                alignContent: 'center',
                backgroundColor:"blue",
            },
            searchComponent:
            {
                flex:0.1
    
            }
        })