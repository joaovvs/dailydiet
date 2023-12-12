import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowUpRight } from 'phosphor-react-native';

import { TouchableOpacity } from "react-native";

import styled, { css } from "styled-components/native";

type Props = {
    isDiet: boolean;
}

export const Container = styled(SafeAreaView)`
    flex: 1;

    background-color: ${({theme}) => theme.COLORS.GRAY_100};
    padding: 24px;

`;

export const Percent = styled.View<Props>`
    width: 100%;
    align-items: center;

    background-color: ${({theme, isDiet})=> isDiet ? theme.COLORS.GREEN_LIGHT: theme.COLORS.RED_LIGHT};

    border-radius: 8px;

    padding: 20px 16px;

    margin-top: 48px;
`;

export const Title = styled.Text`
    ${({theme})=> css`
        font-size: ${theme.FONT_SIZE.XXL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_700};
    `};
`;

export const Subtitle = styled.Text`
    ${({theme})=> css`
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.SM}px;
        color: ${theme.COLORS.GRAY_600};
    `};
`;

export const Icon = styled(ArrowUpRight).attrs<Props>(({theme, isDiet})=>({
    size: 24,
    color: isDiet ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
}))<Props>``;

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
    width: 100%;
    gap: 8px;
    margin-bottom: 16px;
`;

export const SectionTitle = styled.Text`
        ${({theme})=> css`
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.MD}px;
        color: ${theme.COLORS.GRAY_700};
    `};
`;

export const DayTitle = styled.Text`
        margin-bottom: 8px;
        ${({theme})=> css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.LG}px;
        color: ${theme.COLORS.GRAY_700};
`};
`;

