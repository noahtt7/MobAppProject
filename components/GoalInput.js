import { StyleSheet, View, TextInput, Button, Modal } from "react-native";
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
        <Modal visible={props.visible} animationType="fade">
            <View style={styles.inputContainer}>
                <TextInput 
                    style={styles.textInput} 
                    placeholder='Your course goal'
                    onChangeText={goalInputHandler}
                    value={enteredGoalText} // reflects changes in enteredGoaltext in textinput
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.AddGoalButtonAdjust}>
                        <Button style title="Add Goal" onPress={addGoalHandler}/>
                    </View>
                    <View style={styles.buttonContainer}>
                        <Button title="Cancel" />
                    </View>
                </View>
            </View>
        </Modal>
    );
}

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        //flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom : 24,
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: 'pink'
      },
      textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '100%',
        //marginRight: 8,
        padding: 8
      },
      goalsContainer: {
        flex: 6
      },
      buttonContainer: {
        marginTop: 16,
        flexDirection: 'row'
      },
      AddGoalButtonAdjust: {
        //width: 50, 100?
        width: '40%',
        marginHorizontal: 8

      },
      CancelButtonAdjust: {

      }
})