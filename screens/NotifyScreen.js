import React from "react";
import { ExpoConfigView } from "@expo/samples";
import { Text } from "react-native";

export default function NotifyScreen() {
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
      Nội dung của trang thông báo
    </Text>
  );
}

NotifyScreen.navigationOptions = {
  title: "Thông báo"
};
