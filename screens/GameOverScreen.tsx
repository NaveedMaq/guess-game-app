import PrimaryButton from '@/components/ui/PrimaryButton';
import Title from '@/components/ui/Title';
import Colors from '@/constants/colors';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

type TGameOverScreenProps = {
  roundsCount: number;
  userNumber: number;
  onStartNewGame: () => void;
};

const GameOverScreen: React.FC<TGameOverScreenProps> = (props) => {
  return (
    <View style={styles.rootContainer}>
      <Title>GAME OVER!</Title>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require('@/assets/images/success.png')} />
      </View>

      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.highlight}>{props.roundsCount}</Text> rounds to guess the number{' '}
        <Text style={styles.highlight}>{props.userNumber}</Text>
      </Text>

      <PrimaryButton onPress={props.onStartNewGame}>Start New Game</PrimaryButton>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },

  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: 'hidden',
    margin: 36,
  },

  image: {
    width: '100%',
    height: '100%',
  },

  summaryText: {
    fontFamily: 'open-sans',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 24,
  },

  highlight: {
    fontFamily: 'open-sans-bold',
    color: Colors.primary500,
  },
});

export default GameOverScreen;
