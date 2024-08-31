import PrimaryButton from '@/components/PrimaryButton';
import React, { useState } from 'react';
import { Alert, StyleSheet, TextInput, View } from 'react-native';

type TStartGameScreenProps = {
  onPickNumber: (pickedNumber: number) => void;
};

const StartGameScreen: React.FC<TStartGameScreenProps> = (props) => {
  const [enteredNumber, setEnteredNumber] = useState<string>('');

  function numberInputHandler(inputText: string) {
    setEnteredNumber(inputText);
  }

  function resetInputHandler() {
    setEnteredNumber('');
  }

  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert('Invalid number!', 'Number has to be a number between 1 and 99.', [
        { text: 'Okay', style: 'destructive', onPress: resetInputHandler },
      ]);
      return;
    }
    props.onPickNumber(chosenNumber);
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        value={enteredNumber}
        onChangeText={numberInputHandler}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: '#3d021f',
    borderRadius: 8,
    elevation: 4,

    // <- ios
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    // ios ->

    alignItems: 'center',
    justifyContent: 'center',
  },

  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: '#ddb52f',
    borderBottomWidth: 2,
    color: '#ddb52f',
    marginTop: 8,
    marginBottom: 24,

    fontWeight: 'bold',
    textAlign: 'center',
  },

  buttonsContainer: {
    flexDirection: 'row',
  },

  buttonContainer: {
    flex: 1,
  },
});

export default StartGameScreen;
