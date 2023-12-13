import styled, { css } from "styled-components/native";

import { ArrowLeft } from 'phosphor-react-native';
import { TouchableOpacity, View } from "react-native";

export type HeaderTypeStyleProps = 'DIET' | 'NOTDIET' | 'DEFAULT';

type Props = {
    type: HeaderTypeStyleProps;
}


export const Container = styled.View<Props>`
    width: 100%;
    padding: 12px 24px 52px 24px;

    flex-direction: row;
    align-items: center;
    justify-content: center;

    background-color: ${({ theme, type }) => type === 'DEFAULT' ? theme.COLORS.GRAY_300 : type === 'DIET' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`;

export const Title = styled.Text`
        ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.LG}px;
        color: ${theme.COLORS.GRAY_700};
    `};
`;

export const BackButton = styled(TouchableOpacity)`
    position: absolute;
    top: 12px;
    left: 24px;
`;

export const Icon = styled(ArrowLeft).attrs(({ theme }) => ({
    size: 24,
    color: theme.COLORS.GRAY_600,
}))``;
