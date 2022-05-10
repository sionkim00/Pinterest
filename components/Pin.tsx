import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useEffect, useState } from "react";

const Pin = (props) => {
  const [ratio, setRatio] = useState(1);

  const { image, title } = props.pin;

  const onLike = () => {};

  useEffect(() => {
    if (image) {
      Image.getSize(image, (width, height) => {
        setRatio(width / height);
      });
    }
  }, [image]);

  return (
    <View style={styles.pin}>
      <View>
        <Image
          source={{
            uri: image,
          }}
          style={[styles.image, { aspectRatio: ratio }]}
        />

        <Pressable onPress={onLike} style={styles.heartBtn}>
          <AntDesign name="hearto" size={24} color="black" />
        </Pressable>
      </View>

      <Text style={styles.title} numberOfLines={2}>
        {title}
      </Text>
    </View>
  );
};

export default Pin;

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    lineHeight: 22,
    fontWeight: "600",
    margin: 5,
    color: "#181818",
  },
  image: {
    width: "100%",
    borderRadius: 15,
    aspectRatio: 1 / 1,
  },
  pin: {
    width: "100%",
    padding: 4,
  },
  heartBtn: {
    backgroundColor: "#d3cfd4",
    position: "absolute",
    bottom: 10,
    right: 10,
    padding: 5,
    borderRadius: 20,
  },
});
