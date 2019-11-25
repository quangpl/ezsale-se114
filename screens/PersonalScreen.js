import React from "react";
import { Text } from "react-native";
import { ExpoConfigView } from "@expo/samples";

export default function PersonalScreen() {
  /**
   * Go ahead and delete ExpoConfigView and replace it with your content;
   * we just wanted to give you a quick view of your config.
   */
  return (
    <Text
      style={{
        fontSize: 18,
        color: "blue"
      }}
    >
      Nội dung của trang cá nhân
    </Text>
  );
}

PersonalScreen.navigationOptions = {
  title: "Cá nhân"
};
