import { StyleSheet, View, TextInput, Button } from "react-native";
import { useState } from 'react';

function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('');

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    };

    function addGoalHandler() {
        props.onAddGoal(enteredGoalText);
        // Clear text when a new goal is added
        setEnteredGoalText('');
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput 
                style={styles.textInput} 
                placeholder='Your course goal'
                onChangeText={goalInputHandler}
                value={enteredGoalText} // reflects changes in enteredGoaltext in textinput
            />
            <Button style title="Add Goal" onPress={addGoalHandler}/>
        </View>
    );
}

export default GoalInput;

const styles = StyleSheet.create({
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
})