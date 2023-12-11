import { SafeAreaView } from "react-native-safe-area-context";

import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
    flex: 1;

    background-color: linear-gradient(180deg, ${({theme})=> theme.COLORS.WHITE} 0%, ${({theme})=> theme.COLORS.GRAY_100} 100%);


`;