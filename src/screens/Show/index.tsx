import { Header } from "@components/Header";
import { 
    Container, 
    Content, 
    Info, 
    TextContent, 
    TitleDateAndTime, 
    TitleMeal, 
    BackgroundTypeStyleProps } from "./styles";

import { ButtonIcon } from "@components/ButtonIcon";
import { Tag } from "@components/Tag";

import { View } from "react-native";




export function Show(){
    return(
        <Container type={'NOTDIET'}>
            <Header title='Refeição' type={'NOTDIET'} />
            <Content>
                <Info>
                    <View style={{gap: 8}}>
                        <TitleMeal>Sanduíche</TitleMeal>
                        <TextContent>Sanduíche de pão integral com atum e salada de alface e tomate</TextContent>
                    </View>
                    <View style={{gap: 8}}>
                        <TitleDateAndTime>Data e hora</TitleDateAndTime>
                        <TextContent>12/08/2022 às 16:00</TextContent>
                    </View>
                    <Tag type="NOTDIET"/>
                </Info>
                <View style={{gap: 8}}>
                    <ButtonIcon title='Editar refeição' type="edit"/>
                    <ButtonIcon title='excluir refeição' type="remove"/>
                </View>

            </Content>
        </Container>
    );
};