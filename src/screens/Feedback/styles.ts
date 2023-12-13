import styled, { css } from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = {
    isDiet: boolean;
}

export const Container = styled(SafeAreaView)`
    flex: 1;
    align-items: center;
    justify-content: center;

    padding: 116px 32px;
`;

export const FeedbackArea = styled.View`
    flex: 1;
    gap: 8px;
    
`;

export const Title = styled.Text<Props>`
    text-align: center;
    ${({ theme, isDiet }) => css`
        font-size: ${theme.FONT_SIZE.XL}px;
        color: ${isDiet ? theme.COLORS.GREEN_DARK: theme.COLORS.RED_DARK};
        font-family: ${theme.FONT_FAMILY.BOLD};
    `}
`;

export const Subtitle = styled.Text`
    text-align: center;
        ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.MD}px;
        color: ${theme.COLORS.GRAY_700};
        font-family: ${theme.FONT_FAMILY.REGULAR};
    `};
`;

export const BoldSubtitle = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.MD}px;
        color: ${theme.COLORS.GRAY_700};
        font-family: ${theme.FONT_FAMILY.BOLD};
    `}; 
`;