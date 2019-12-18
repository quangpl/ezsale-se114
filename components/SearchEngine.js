import { SearchBar } from 'react-native-elements';
import React from "react";
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from 'react-native';
export default class SearchBarHome extends React.Component {
    state = {
      search: '',
    };  
    updateSearch = search => {
        this.setState({ search });
      };
    
      render() {
        const { search } = this.state;
    
        return (
          <View style={styles.container}>
                <SearchBar
                placeholder="Nhập tên 
ản phẩm bạn muốn so sánh"
                onChangeText={this.updateSearch}
                value={search}
                lightTheme={true}
                containerStyle={styles.SearchEngie}
                />
                <View style= {styles.LogoComponent}>
                         <Image
                        style={styles.Logo}
                        source={{
                            uri:
                            "https://brasol.vn/public/ckeditor/uploads/thiet-ke-logo-tin-tuc/logo-tiki-png.png"
                        }}
                        />
                        <Image
                        style={styles.Logo2}
                        source={{
                            uri:
                            "https://seeklogo.com/images/S/shopee-logo-065D1ADCB9-seeklogo.com.png"
                        }}
                        /><Image
                        style={styles.Logo}
                        source={{
                            uri:
                            "https://brasol.vn/public/ckeditor/uploads/thiet-ke-logo-tin-tuc/logo-tiki-png.png"
                        }}
                        />
                </View>
          </View>
        );
      }
    }
    const styles = StyleSheet.create({
        container: {
          backgroundColor: '#ffffff',
          //borderRadius:50,
          flexDirection: "column",
        },
        SearchEngie: {
            backgroundColor: '#ffffff',
        },
        logo:
        {
            //alignSelf: 'flex-end',
            width: '40%',
            height: '20%',
        },
        Logo2:
        {
            //alignSelf: 'flex-end',
            width: '20%',
            height: '32%',
        },
        LogoComponent:
        {
            flexDirection: "column",
            justifyContent: 'center',
            width:'90%'
        }
    })

