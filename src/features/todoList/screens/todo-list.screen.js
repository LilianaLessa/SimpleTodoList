import * as React from 'react';
import {StyleSheet, View, FlatList} from "react-native";
import {TodoListTitle} from "../components/todo-list-title.component";
import {TaskListItem} from "../components/task-list-item.component";
import {useState} from "react";
import 'react-native-get-random-values';
import {v4 as uuidv4} from "uuid";
import {TextInput} from "react-native-paper";

export const TodoListScreen = () => {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (newTask.length > 0) {
      setTasks([
        ...tasks,
        {
          id: uuidv4(),
          name: newTask,
          done: false,
        }
      ]);
      setNewTask("");
    }
  };

  const removeTask = (taskToRemove) => {
    setTasks(tasks.filter(task => taskToRemove.id !== task.id));
  }

  return (
    <View style={styles.container}>
      <TodoListTitle />
      <View style={styles.newTaskInputContainer}>
        <TextInput
          label="New Task"
          value={newTask}
          onChangeText={v => setNewTask(v)}
          onSubmitEditing={addTask}
        />
      </View>
      <View style={styles.list}>
        <FlatList
          data={tasks}
          renderItem={({item}) => <TaskListItem
            item={item}
            onPressCallback={removeTask}
          />}
          keyExtractor={task => `${task.id}_key`}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: "stretch",
    justifyContent: "flex-start"
  },
  list: {
    marginBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: "flex-start"
  },
  newTaskInputContainer: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
  }
});
