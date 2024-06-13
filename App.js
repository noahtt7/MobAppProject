import { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals, 
      { text: enteredGoalText, key: Math.random().toString() },
    ]);
  };

  function deleteGoalHandler(id) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
    console.log('delete');

  }

  return (
    <View style={styles.appContainer}>
      <Button title='Add New Goal' 
              color="5e0acc" 
              onPress={startAddGoalHandler} />
      <GoalInput visible={modalIsVisible} onAddGoal={addGoalHandler} /> 
      <View style={styles.goalsContainer}>
        <FlatList 
          data={courseGoals} 
          renderItem={itemData => {
            return (
              <GoalItem 
              text={itemData.item.text} 
              id={itemData.item.id}
              onDeleteItem={deleteGoalHandler}
              />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBounceVertical={false}
        />
      </View>
      {/* <Text style={styles.dummyText}>Test text</Text>
      <Text style={styles.dummyText}>Yoooo</Text>
      <Button title='Tap me!' /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  // dummyText: {
  //   margin: 16,
  //   padding: 16,
  //   borderWidth: 2,
  //   borderColor: 'blue'
  // }
  appContainer: {
    flex: 1,
    // will give outer layer all the space
    // inner containers can divide that inner space
    paddingTop : 50,
    paddingHorizontal : 16
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom : 24,
    borderBottomWidth: 1,
    borderBottomColor: 'pink'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8
  },
  goalsContainer: {
    flex: 6
  },
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  goalText: {
    color: 'white'
  }
});
