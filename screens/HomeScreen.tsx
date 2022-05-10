import { StyleSheet, Image, ScrollView } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import Pin from "../components/Pin";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";

export default function HomeScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Pin
          pin={{
            title: "Title",
            image:
              "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/pinterest/0.jpeg",
          }}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
});