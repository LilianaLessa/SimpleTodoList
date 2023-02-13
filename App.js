import React from "react";
import {SafeAreaProvider} from "react-native-safe-area-context";
import {
  TodoListScreen
} from "./src/features/todoList/screens/todo-list.screen";

export default function App() {
  return (
    <SafeAreaProvider>
      <TodoListScreen />
    </SafeAreaProvider>
  );
}
