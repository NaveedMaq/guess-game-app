import { registerRootComponent } from 'expo';
import React from 'react';
import { Text, View } from 'react-native';

function App() {
  return (
    <View style={{ padding: 30 }}>
      <Text style={{ fontSize: 40 }}>Welcome to the Root Component </Text>
    </View>
  );
}

registerRootComponent(App);
