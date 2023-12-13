import styled, {css} from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";


export const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: ${({theme})=> theme.COLORS.GRAY_300};


`;

export const Content = styled.ScrollView`
    flex: 1;
    border-radius: 20px;
    background-color: ${({theme})=> theme.COLORS.GRAY_100};
    margin-top: -26px;

    padding: 40px 24px;
`
export const Form = styled.ScrollView`

    flex: 1;

    margin-bottom: 148px;
    
`;

export const DateAndTime = styled.View`
    flex-direction: row;
    gap: 20px;

    flex: 1;

    justify-content: space-evenly;
`;

export const Diet = styled.View`
    flex-direction: row;
    justify-content: space-evenly;
`;
