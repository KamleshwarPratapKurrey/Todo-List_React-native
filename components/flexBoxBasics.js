import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function FlexBoxBasics() {
  return (
    <View style={styles.container}>
      <Text style={styles.box1}>box-1</Text>
      <Text style={styles.box2}>box-2</Text>
      <Text style={styles.box3}>box-3</Text>
      <Text style={styles.box4}>box-4</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ddd",
    padding: 44,
    // flex: 1,
    // justifyContent: "center",
    flexDirection: "row",
    // alignItems: "flex-end",
    alignItems: "flex-start",
    justifyContent: "space-around",
  },

  box1: {
    backgroundColor: "coral",
    padding: 10,
    flex: 5,
  },
  box2: {
    backgroundColor: "gold",
    padding: 20,
    flex: 1,
  },
  box3: {
    backgroundColor: "skyblue",
    padding: 30,
    flex: 3,
  },
  box4: {
    backgroundColor: "violet",
    padding: 40,
    flex: 1,
  },
});
