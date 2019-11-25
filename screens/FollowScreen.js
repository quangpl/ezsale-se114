import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default function FollowScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text
        style={{
          fontSize: 18,
          color: "blue"
        }}
      >
        Nội dung của trang theo dõi
      </Text>
    </ScrollView>
  );
}

FollowScreen.navigationOptions = {
  title: "Theo dõi"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
