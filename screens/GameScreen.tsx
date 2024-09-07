import React, { useEffect, useState } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

import NumberContainer from '@/components/game/NumberContainer';
import Title from '@/components/ui/Title';
import PrimaryButton from '@/components/ui/PrimaryButton';
import Card from '@/components/ui/Card';
import InstructionText from '@/components/ui/InstructionText';

function generateRandomNumber(min: number, max: number, exclude: number) {
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;

  if (randomNumber === exclude) {
    return generateRandomNumber(min, max, exclude);
  } else {
    return randomNumber;
  }
}

type TGameScreenProps = {
  userNumber: number;
  onGameOver: () => void;
};

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen: React.FC<TGameScreenProps> = (props) => {
  const initialGuess = generateRandomNumber(1, 100, props.userNumber);
  const [currentGuess, setCurrentGuess] = useState<number>(initialGuess);

  useEffect(() => {
    if (currentGuess === props.userNumber) {
      props.onGameOver();
    }
  }, [currentGuess, props.userNumber, props.onGameOver]);

  function nextGuessHandler(direction: 'lower' | 'higher') {
    if (
      (direction === 'lower' && currentGuess < props.userNumber) ||
      (direction === 'higher' && currentGuess > props.userNumber)
    ) {
      Alert.alert("Don't lie!", 'You know that this is wrong...', [{ text: 'Sorry!', style: 'cancel' }]);
      return;
    }

    if (direction === 'lower') {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }

    const newRandomNumber = generateRandomNumber(minBoundary, maxBoundary, currentGuess);
    setCurrentGuess(newRandomNumber);
  }

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{`${currentGuess}`}</NumberContainer>
      <Card>
        <InstructionText style={styles.instructionText}>Higher or lower?</InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
              <Ionicons name="remove" size={20} color="white" />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, 'higher')}>
              {' '}
              <Ionicons name="add" size={20} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </Card>

      <View>{/* LOG ROUNDS */}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    marginTop: 32,
  },
  instructionText: {
    marginBottom: 12,
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
  },
});

export default GameScreen;
