import Colors from '@/constants/colors';
import React from 'react';
import { StyleSheet, View } from 'react-native';

type TCardProps = {
  children: React.ReactNode;
};

const Card: React.FC<TCardProps> = (props) => {
  return <View style={styles.card}>{props.children}</View>;
};

const styles = StyleSheet.create({
  card: {
    marginTop: 36,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    elevation: 4,

    // <- ios
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    // ios ->

    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Card;
