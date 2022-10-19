import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function AddTodo({ submitHandler }) {
  const [text, setText] = useState("");
  const changeHandler = (val) => {
    setText(val);
  };
  return (
    <View>
      <TextInput
        placeholder="enter todo...."
        onChangeText={changeHandler}
        style={styles.input}
      />
      <Button
        title="add todos"
        style={styles.btn}
        onPress={() => submitHandler(text)}
        color="grey"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "darkgrey",
    marginBottom: 12,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
});
