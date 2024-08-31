import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

type TPrimaryButtonProps = {
  children: string;
  onPress?: () => void;
};

const PrimaryButton: React.FC<TPrimaryButtonProps> = ({ children, onPress }) => {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) => (pressed ? [styles.buttonInnerContainer, styles.pressed] : styles.buttonInnerContainer)}
        onPress={onPress}
        android_ripple={{ color: '#640535' }}
      >
        <Text style={styles.buttonText}> {children}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: 'hidden',
  },
  buttonInnerContainer: {
    backgroundColor: '#72063c',
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },

  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },

  pressed: {
    opacity: 0.75,
  },
});

export default PrimaryButton;
