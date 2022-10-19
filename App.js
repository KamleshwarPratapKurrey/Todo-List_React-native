import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Alert,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Header from "./components/header";
import TodosItem from "./components/todosItem";
import AddTodo from "./components/addTodo";
// import FlexBoxBasics from "./components/flexBoxBasics";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "you are happy", key: "1" },
    { text: "play with me", key: "2" },
    { text: "can we play together todo list game", key: "3" },
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.key != key);
    });
  };

  const submitHandler = (text) => {
    if (text.length > 3) {
      setTodos((prevTodos) => {
        return [{ text: text, key: Math.random().toString() }, ...prevTodos];
      });
    } else {
      Alert.alert("opps!", "enter the more than three chars", [
        { text: "understood", onPress: () => console.log("alert closed") },
      ]);
    }
  };

  return (
    // <FlexBoxBasics />
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
        console.log("dismissed keyboard");
      }}
    >
      <View style={styles.container}>
        <Header />

        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodosItem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 34,
    backgroundColor: "#fff",
    flex: 1,
  },
  list: {
    margin: 12,
    // backgroundColor: "coral",
    flex: 1,
  },
});
