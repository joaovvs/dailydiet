import { StatusBar } from "expo-status-bar";

import { ThemeProvider } from "styled-components";
import { Loading } from "@components/Loading";

import {
  useFonts,
  NunitoSans_400Regular,
  NunitoSans_700Bold,
} from "@expo-google-fonts/nunito-sans";

import { Home } from "@screens/Home";
import theme from "./src/theme";

export default function App() {
  const [fontsLoaded] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold });
  
  if ( fontsLoaded ){
    return <Loading/>
  } else{
    return (
      <ThemeProvider theme={theme}>
          <StatusBar style="auto" />
          <Home/>
      </ThemeProvider>
    );
  }
}
