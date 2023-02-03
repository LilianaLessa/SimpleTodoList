import React, {useState} from "react";
import {TodoListTitle} from "../components/todo-list-title.component";
import {FlatList, SafeAreaView, View, StyleSheet} from "react-native";
import {
  Checkbox,
  IconButton,
  MD3Colors,
  Text,
  TextInput
} from "react-native-paper";
import 'react-native-get-random-values';
const TaskListItem = ({item, onPressCallback}) => {

  const [checked, setChecked] = React.useState(item.done);

  const handleDone = () => {
    item.done = !item.done;
    setChecked(item.done);
  }

  const styles = StyleSheet.create({
    taskDone:{
      textDecorationLine: 'line-through'
    },
    taskOpen:{

    },
  })

  return (
    <View>
      <Checkbox
        status={checked ? 'checked' : 'unchecked'}
        onPress={handleDone}
      />
      <Text variant="bodyMedium" style={checked ? styles.taskDone : styles.taskOpen}>{item.name}</Text>
      <IconButton
        icon="delete"
        iconColor={MD3Colors.primary30}
        size={20}
        onPress={() => onPressCallback(item) }
      />
    </View>
  );
};


import {v4 as uuidv4} from 'uuid';

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
    <SafeAreaView>
      <TodoListTitle />
      <View>
        <TextInput
          label="New Task"
          value={newTask}
          onChangeText={v => setNewTask(v)}
          onSubmitEditing={addTask}
        />
      </View>
      <View>
        <FlatList
          data={tasks}
          renderItem={({item}) => <TaskListItem
            item={item}
            onPressCallback={removeTask}
          />}
          keyExtractor={task => `${task.id}_key`}
        />
      </View>
    </SafeAreaView>
  );
}
