import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import HomeScreen from './src/views/HomeScreen';
import { store } from './src/state/store';

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar style="light" />
      <HomeScreen />
    </Provider>
  );
}

