import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type ButtonIconTypeStyleProps = 'add' |'edit' | 'remove' | 'none';

type Props = {
    type: ButtonIconTypeStyleProps
}


export const Container = styled(TouchableOpacity)<Props>`
    width: 100%;
    height: 54px;
    flex-direction: row;
    box-sizing: border-box;
    border-radius: 6px;

    align-items: center;
    justify-content: center;
    gap: 12px;

    background-color: ${({ theme, type }) => type==='remove' ? theme.COLORS.GRAY_100 : theme.COLORS.GRAY_600};
    border: 1px solid ${({ theme, type }) => type==='remove' ?  theme.COLORS.GRAY_600: theme.COLORS.GRAY_100};
    
    
    padding: 16px 24px;
`;

export const Title = styled.Text<Props>`
    ${({ theme, type }) => css`
        font-size: ${theme.FONT_SIZE.MD}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
        color: ${type === 'remove'? theme.COLORS.GRAY_700 : theme.COLORS.WHITE}
    `};
`;