import styled, {css} from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";


export const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: ${({theme})=> theme.COLORS.GRAY_300};
`;

export const Content = styled.View`
    flex: 1;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;

    background-color: ${({theme})=> theme.COLORS.GRAY_100};
    margin-top: -26px;

    padding: 40px 24px;
`
export const Form = styled.ScrollView`
    flex: 1; 
`;

export const DateAndTime = styled.View`
    flex: 1;
    flex-direction: row;
    gap: 20px;


    justify-content: space-evenly;
`;

export const Diet = styled.View`
    flex: 1;
    margin-bottom: 90px;
`

export const Options = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: space-evenly;
    gap: 8px;
`;

export const DietTitle = styled.Text`
    ${({theme})=> css`
        color: ${theme.COLORS.GRAY_600};
        font-size: ${theme.FONT_SIZE.SM}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
    `};
    margin-bottom: 8px;
`;