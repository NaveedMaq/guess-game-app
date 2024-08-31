import { registerRootComponent } from 'expo';
import { StyleSheet } from 'react-native';

import StartGameScreen from './screens/StartGameScreen';

function App() {
  return <StartGameScreen />;
}

const styles = StyleSheet.create({});

registerRootComponent(App);
