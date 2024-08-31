import React from 'react';
import { Text, View } from 'react-native';

type TPrimaryButtonProps = {
  children: string;
};

const PrimaryButton: React.FC<TPrimaryButtonProps> = ({ children }) => {
  return (
    <View>
      <Text> {children}</Text>
    </View>
  );
};

export default PrimaryButton;
