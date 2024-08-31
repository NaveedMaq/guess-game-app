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
    color: '#ddb52f',
    textAlign: 'center',
    borderWidth: 2,
    borderColor: '#ddb52f',
    padding: 12,
  },
});

export default Title;
