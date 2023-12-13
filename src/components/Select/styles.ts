import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";
import { Circle } from 'phosphor-react-native'

export type SelectTypeStyleProps = 'DIET' | 'NOTDIET';

export type SelectStyleProps = {
    isActive: boolean;
    type: SelectTypeStyleProps;
}


export const Container = styled(TouchableOpacity)<SelectStyleProps>`
    flex: 1;
    flex-direction: row;
    padding: 16px;
    background-color: ${({theme, isActive, type})=> isActive ? type==='DIET' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT : theme.COLORS.GRAY_200 };
    border-radius: 6px;

    gap: 8px;
    
    ${({theme, isActive, type}) => isActive && css`
        border: 1px solid ${ type==='DIET' ? theme.COLORS.GREEN_DARK: theme.COLORS.RED_DARK};
    `};

    border-radius: 4px;

    align-items: center;
    justify-content: center;
`;

export const Icon = styled(Circle).attrs<SelectStyleProps>(({theme, type})=>({
    size: 8,
    color: type==="DIET" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
    weight: 'fill'
}))<SelectStyleProps>``;

export const Title = styled.Text`
     ${({theme}) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.SM}px;
        color: ${theme.COLORS.GRAY_700};
    `};
`;
