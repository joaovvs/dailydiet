import styled, { css } from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

export type BackgroundTypeStyleProps = 'DIET' | 'NOTDIET';

type Props = {
    type: BackgroundTypeStyleProps;
}

export const Container = styled(SafeAreaView) <Props>`
    flex: 1;
    background-color: ${({ theme, type }) => type === 'DIET' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`;

export const Content = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.GRAY_100};

    border-top-left-radius: 20px;
    border-top-right-radius: 20px;

    padding: 40px 24px;
`;
export const Info = styled.View`
    flex: 1;
    gap: 24px;
`;


export const TitleMeal = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.XL}px;
        color: ${theme.COLORS.GRAY_700};
    `};
`;

export const TitleDateAndTime = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.SM}px;
        color: ${theme.COLORS.GRAY_700};
    `};
`;

export const TextContent = styled.Text`
        ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.MD}px;
        color: ${theme.COLORS.GRAY_600};
    `};
`
