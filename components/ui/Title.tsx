import Colors from '@/constants/colors';
import React from 'react';
import { StyleSheet, Text } from 'react-native';

type TTitleProps = {
  children: string;
};

const Title: React.FC<TTitleProps> = (props) => {
  return <Text style={styles.title}>{props.children}</Text>;
};
const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.white,
    textAlign: 'center',
    borderWidth: 2,
    borderColor: Colors.accent500,
    padding: 12,
  },
});

export default Title;
