import styled, {css} from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

import { ArrowLeft} from 'phosphor-react-native';
import { TouchableOpacity } from "react-native";

type Props = {
    isDiet: boolean;
}

export const Container = styled(SafeAreaView)<Props>`
    flex: 1;
    background-color: ${({theme,isDiet})=> isDiet ? theme.COLORS.GREEN_LIGHT: theme.COLORS.RED_LIGHT};
`; 

export const Percent = styled.View<Props>`
    flex: 1;

    background-color: ${({theme,isDiet})=> isDiet ? theme.COLORS.GREEN_LIGHT: theme.COLORS.RED_LIGHT};
    align-items: center;
    justify-content: center;

`;

export const PercentTitle = styled.Text`
         ${({theme})=> css`
        font-size: ${theme.FONT_SIZE.XXL}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
        color: ${theme.COLORS.GRAY_700}
    `};
`;

export const PercentSubtitle = styled.Text`
         ${({theme})=> css`
        font-size: ${theme.FONT_SIZE.SM}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
        color: ${theme.COLORS.GRAY_600}
    `};
`;

export const BackButton = styled(TouchableOpacity)`
    position: absolute;
    top: 12px;
    left: 24px;
`;

export const Icon = styled(ArrowLeft).attrs<Props>(({theme, isDiet})=>({
    size: 24,
    color: isDiet ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
}))<Props>``;

export const Content = styled.View`
    flex: 1;

    align-items: center;
    margin-top: -20px;
    padding: 33px 24px 261px;

    gap: 23px;

    border-top-left-radius: 20px;
    border-top-right-radius: 20px;

    background-color: ${({theme})=> theme.COLORS.GRAY_100};
`;

export const Title = styled.Text`
     ${({theme})=> css`
        font-size: ${theme.FONT_SIZE.SM}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
        color: ${theme.COLORS.GRAY_700}
    `};
`;

export const Data = styled.View`
    gap: 12px;
`; 

export const Sequence = styled.View`

    background-color: ${({theme})=> theme.COLORS.GRAY_200};
    
    padding: 16px;

    align-items: center;
    justify-content: center;
    border-radius: 8px;

`;

export const Total = styled.View`
    background-color: ${({theme})=> theme.COLORS.GRAY_200};
    
    padding: 16px;

    align-items: center;
    justify-content: center;
    border-radius: 8px;

`;

export const ValueTitle = styled.Text`
    ${({theme})=> css`
        font-size: ${theme.FONT_SIZE.XL}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
        color: ${theme.COLORS.GRAY_700}
    `};
`;

export const ValueSubtitle = styled.Text`
    ${({theme})=> css`
        font-size: ${theme.FONT_SIZE.SM}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
        color: ${theme.COLORS.GRAY_600}
    `};
    text-align: center;;
`;


export const Info = styled.View`
    width: max-content;
    flex-direction: row;
    gap: 12px;

    justify-content: space-around;
`;

export const Success = styled.View`
    flex: 1 0 0;
    align-items: center;
    justify-content: center;
    background-color: ${({theme})=> theme.COLORS.GREEN_LIGHT};
    padding: 16px;
    gap: 8px;

    border-radius: 8px;
`;

export const Fail = styled.View`
    flex: 1 0 0;
    align-items: center;
    justify-content: center;

    background-color: ${({theme})=> theme.COLORS.RED_LIGHT};
    padding: 16px;
    gap: 8px;

    border-radius: 8px;
`;



