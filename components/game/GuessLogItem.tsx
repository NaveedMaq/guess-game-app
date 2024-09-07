import Colors from '@/constants/colors';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type TGuessLogItemProps = {
  roundCount: number;
  guess: number;
};

const GuessLogItem: React.FC<TGuessLogItemProps> = (props) => {
  return (
    <View style={styles.listItem}>
      <Text style={styles.itemText}>#{props.roundCount}</Text>
      <Text style={styles.itemText}>Opponent's Guess: {props.guess}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    borderColor: Colors.primary800,
    borderWidth: 1,
    borderRadius: 40,
    padding: 12,
    marginVertical: 8,
    backgroundColor: Colors.accent500,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    elevation: 4,

    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 3,
    shadowOpacity: 0.25,
  },

  itemText: {
    fontFamily: 'open-sans',
  },
});

export default GuessLogItem;
