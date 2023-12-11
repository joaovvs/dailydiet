import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowUpRight } from 'phosphor-react-native';

import { TouchableOpacity } from "react-native";

import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
    flex: 1;

    background-color: ${({theme}) => theme.COLORS.GRAY_100};
    padding: 24px;

`;

export const Percent = styled.View`
    width: 100%;
    align-items: center;

    background-color: ${({theme})=> theme.COLORS.GREEN_LIGHT};

    border-radius: 8px;

    padding: 20px 16px;

    margin-top: 48px;
`;

export const Title = styled.Text`
    font-size: 32px;
    font-family: ${({theme})=> theme.FONT_FAMILY.BOLD};
    color: ${({theme})=> theme.COLORS.GRAY_700};
`;

export const Subtitle = styled.Text`

    font-family: ${({theme})=> theme.FONT_FAMILY.REGULAR};


    color: ${({theme})=> theme.COLORS.GRAY_600};
`;

export const Icon = styled(ArrowUpRight).attrs(({theme})=>({
    size: 24,
    color: theme.COLORS.GREEN_DARK
}))``;

export const Open = styled(TouchableOpacity)`
    position: absolute;
    top: 8px;
    right: 8px;
`;

export const Meals = styled.View`
    margin-top: 40px;
    width: 100%;
`
export const New = styled.View`
    margin-top: 40px;
    width: 100%;
`;

export const SectionTitle = styled.Text`
    
`;

