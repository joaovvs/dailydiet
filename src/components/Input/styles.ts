import styled, { css } from "styled-components/native";
import { TextInput, TextInputProps } from "react-native";

type Props = TextInputProps &{
    isActive: boolean;
}

export const Container = styled.View`
    flex: 1;
    background-color: ${({theme})=> theme.COLORS.GRAY_100};

    gap: 4px;

`;

export const Label = styled.Text`
        ${({theme})=> css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.SM}px;
        color: ${theme.COLORS.GRAY_700};
    `};
`;

export const InputField = styled(TextInput)<Props>`
    padding: 14px;
    border-radius: 6px;

    margin-bottom: 24px;
    ${({theme, isActive, multiline })=> css`
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.SM}px;
        color: ${theme.COLORS.GRAY_700};
        min-height: ${multiline ? 142: 48}px;
        max-height: ${multiline ? 142: 48}px;
        border: 1px solid ${isActive ? theme.COLORS.GRAY_700: theme.COLORS.GRAY_300};
    `};
`;