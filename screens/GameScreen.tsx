import React, { useEffect, useState } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

import NumberContainer from '@/components/game/NumberContainer';
import Title from '@/components/ui/Title';
import PrimaryButton from '@/components/ui/PrimaryButton';
import Card from '@/components/ui/Card';
import InstructionText from '@/components/ui/InstructionText';
import { FlatList, GestureHandlerRootView } from 'react-native-gesture-handler';
import GuessLogItem from '@/components/game/GuessLogItem';

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
  onGameOver: (numberOfRounds: number) => void;
};

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen: React.FC<TGameScreenProps> = (props) => {
  const initialGuess = generateRandomNumber(1, 100, props.userNumber);
  const [currentGuess, setCurrentGuess] = useState<number>(initialGuess);
  const [guessRounds, setGuessRounds] = useState<number[]>([initialGuess]);

  useEffect(() => {
    if (currentGuess === props.userNumber) {
      props.onGameOver(guessRounds.length);
    }
  }, [currentGuess, props.userNumber, props.onGameOver]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

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
    setGuessRounds((prev) => [newRandomNumber, ...prev]);
  }

  const guessRoundsListLength = guessRounds.length;

  return (
    <GestureHandlerRootView>
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

        <View style={styles.listContainer}>
          <FlatList
            data={guessRounds}
            renderItem={(itemData) => (
              <GuessLogItem guess={itemData.item} roundCount={guessRoundsListLength - itemData.index} />
            )}
            keyExtractor={(item) => item.toString()}
          />
        </View>
      </View>
    </GestureHandlerRootView>
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
  listContainer: {
    flex: 1,
    padding: 16,
  },
});

export default GameScreen;
