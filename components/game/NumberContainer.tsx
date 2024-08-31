import Colors from '@/constants/colors';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type TNumberContainerProps = {
  children: string;
};

const NumberContainer: React.FC<TNumberContainerProps> = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{props.children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    padding: 24,
    margin: 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },

  numberText: {
    color: Colors.accent500,
    fontSize: 36,
    fontWeight: 'bold',
  },
});

export default NumberContainer;
