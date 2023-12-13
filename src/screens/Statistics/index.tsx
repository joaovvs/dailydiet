
import { 
    Container, 
    Percent, 
    Content,
    Title,
    Data, 
    Sequence, 
    Total, 
    ValueTitle, 
    ValueSubtitle, 
    Info,
    Success,
    Fail,
    PercentTitle,
    PercentSubtitle,
    BackButton,
    Icon} from "./styles";

import { meal } from "src/@types/types";

import { useRoute, useNavigation } from "@react-navigation/native";

type RouteParams = {
    percent: number;
}

export function Statistics(){
    const navigation = useNavigation();

    const route = useRoute();
    const { percent } = route.params as RouteParams;
    
    function handleBack(){
        navigation.navigate('home');
    }

    function countMeals(){

    } 

    return(
        <Container isDiet={percent > 50 ? true: false}>
            <Percent isDiet={percent > 50 ? true: false}>
                <PercentTitle>{`${percent}%`}</PercentTitle>
                <PercentSubtitle>das refeições dentro da dieta</PercentSubtitle>
                <BackButton
                    onPress={handleBack}>
                    <Icon isDiet={percent > 50 ? true: false}/>
                </BackButton>
            </Percent>
            <Content>
                <Title>Estatísticas gerais</Title>
                <Data>
                    <Sequence>
                        <ValueTitle>22</ValueTitle>
                        <ValueSubtitle>melhor sequência de pratos dentro da dieta</ValueSubtitle>
                    </Sequence>
                    <Total>
                        <ValueTitle>{}</ValueTitle>
                        <ValueSubtitle>refeições registradas</ValueSubtitle>
                    </Total>
                    <Info>
                        <Success>
                            <ValueTitle>99</ValueTitle>
                            <ValueSubtitle>Refeições dentro da dieta</ValueSubtitle>
                        </Success>
                        <Fail>
                            <ValueTitle>10</ValueTitle>
                            <ValueSubtitle>Refeições fora da dieta</ValueSubtitle>
                        </Fail>
                    </Info>
                </Data>
            </Content>
        </Container>
    );
};