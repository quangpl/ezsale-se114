import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import HorizontalItem from "../components/HorizontalItem";
export default function FollowScreen() {
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
