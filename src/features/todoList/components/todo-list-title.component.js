import React from "react";
import { Text } from 'react-native-paper';
import {StatusBar, StyleSheet} from "react-native";
import Constants from "expo-constants";

export const TodoListTitle = () => {
  return (
      <Text variant="titleLarge" style={styles.test}>Todo List</Text>
  );
};

const styles = StyleSheet.create({
  test: {
    marginTop: StatusBar.currentHeight ?? Constants.statusBarHeight,
  },
});
