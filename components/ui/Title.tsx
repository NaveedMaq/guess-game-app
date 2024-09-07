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
    fontFamily: 'open-sans-bold',
    fontSize: 24,
    color: Colors.white,
    textAlign: 'center',
    borderWidth: 2,
    borderColor: Colors.white,
    padding: 12,
  },
});

export default Title;
