import { StatusBar } from 'expo-status-bar';
import {  Text, View } from 'react-native';
import { Home } from '@screens/Home'

export default function App() {
  return (
    <View >
      <Home></Home>
      <StatusBar style="auto" />
    </View>
  );
}


