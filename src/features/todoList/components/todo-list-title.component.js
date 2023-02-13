import React from "react";
import {Appbar} from 'react-native-paper';

export const TodoListTitle = () => {
  return (
    <Appbar.Header>
      <Appbar.Content title="Todo List" />
    </Appbar.Header>
  );
};
