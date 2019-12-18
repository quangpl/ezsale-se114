import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { LinearGradient } from "expo-linear-gradient";

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
