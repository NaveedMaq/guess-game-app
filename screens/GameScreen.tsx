import Title from '@/components/Title';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const GameScreen: React.FC = () => {
  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      {/* GUESS */}

      <View>
        <Text>Higher or lower?</Text>
        {/* +- */}
      </View>

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
});

export default GameScreen;
