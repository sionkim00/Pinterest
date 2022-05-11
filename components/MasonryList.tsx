import {
  ScrollView,
  StyleSheet,
  useWindowDimensions,
  View,
} from "react-native";
import React, { useState } from "react";
import Pin from "./Pin";

interface IMasonryList {
  pins: {
    id: string;
    image: string;
    title: string;
  }[];
}

export default function MasonryList({ pins }: IMasonryList) {
  const width = useWindowDimensions().width;

  const numCols = Math.ceil(width / 300);

  return (
    <ScrollView>
      <View style={styles.container}>
        {Array.from(Array(numCols)).map((col, colIndex) => (
          <View style={styles.column}>
            {pins
              .filter((_, index) => index % numCols === colIndex)
              .map((pin) => (
                <Pin pin={pin} key={pin.id} />
              ))}
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: "row",
  },
  column: {
    flex: 1,
  },
});
