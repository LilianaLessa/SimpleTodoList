import React from "react";
import {StyleSheet, View, TouchableOpacity} from "react-native";
import {Checkbox, IconButton, MD3Colors, Text} from "react-native-paper";

const styles = StyleSheet.create({
  taskDone:{
    textDecorationLine: 'line-through'
  },
  taskOpen:{
  },
  label: {
    flexDirection: "row",
    alignItems: "center"
  },
  listItem: {
    backgroundColor: "#eee",
    flexDirection: "row",
    alignItems: "center",
    elevation: 5,
    borderWidth: 1,
    borderColor: "#000",
    justifyContent: "space-between",
    marginBottom: 10
  }
})

export const TaskListItem = ({item, onPressCallback}) => {
  const [checked, setChecked] = React.useState(item.done);

  const handleDone = () => {
    item.done = !item.done;
    setChecked(item.done);
  }

  return (
    <View style={styles.listItem}>
      <View style={styles.label}>
        <Checkbox
          style={styles.checkbox}
          status={checked ? 'checked' : 'unchecked'}
          onPress={handleDone}
        />
        <Text
          variant="bodyMedium"
          style={checked ? styles.taskDone : styles.taskOpen}>
          {item.name}
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => onPressCallback(item) }
      >
        <IconButton
          icon="delete"
          iconColor={MD3Colors.primary30}
          size={20}
        />
      </TouchableOpacity>
    </View>
  );
};
