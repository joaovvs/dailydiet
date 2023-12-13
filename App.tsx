import { StatusBar } from "expo-status-bar";

import { ThemeProvider } from 'styled-components/native';
import { Loading } from "@components/Loading";


import {
  useFonts,
  NunitoSans_400Regular,
  NunitoSans_700Bold,
} from "@expo-google-fonts/nunito-sans";

import { Routes } from "./src/routes";


import theme from "./src/theme";

export default function App() {
  const [fontsLoaded] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold });
  
  if ( !fontsLoaded ){
    return (
      <ThemeProvider theme={theme}>
          <Loading/>
        </ThemeProvider>)
  } else{
    return (
      <ThemeProvider theme={theme}>      
          <StatusBar
            style="dark" 
            backgroundColor="transparent"
            translucent
          />
          <Routes/>
      </ThemeProvider>
    );
  }
}
