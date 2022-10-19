import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>My Todos</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#ddd",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 23,
    height: 74,
  },
  title: {
    textAlign: "center",
    fontSize: 18,
    color: "grey",
    fontWeight: "bold",
  },
});
