import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function TodosItem({ item, pressHandler }) {
  return (
    <TouchableOpacity onPress={() => pressHandler(item.key)}>
      <View style={styles.itemWithIcons}>
        <MaterialIcons
          style={styles.deleteIcon}
          name="delete"
          size={18}
          color="#333"
        />
        <Text>{item.text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  itemWithIcons: {
    paddingHorizontal: 13,
    paddingVertical: 18,
    // borderWidth: .4,
    // borderColor: '#ccc',
    marginTop: 12,
    borderRadius: 6,
    backgroundColor: "#eee",
    flexDirection: "row",
  },
  deleteIcon: {
    marginRight: 13,
  },
});
