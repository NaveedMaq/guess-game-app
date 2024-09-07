import React from 'react';
import { StyleProp, Text, TextStyle } from 'react-native';

import Colors from '@/constants/colors';

type TInstructionTextProps = {
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
};

const InstructionText: React.FC<TInstructionTextProps> = (props) => {
  return <Text style={[styles.instructionText, props.style]}>{props.children}</Text>;
};

const styles = {
  instructionText: {
    color: Colors.accent500,
    fontSize: 24,
    fontFamily: 'open-sans',
  },
};

export default InstructionText;
