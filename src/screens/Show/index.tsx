import { useState } from 'react'
import { 
    Container, 
    Content, 
    Info, 
    TextContent, 
    TitleDateAndTime, 
    TitleMeal, 
    BackgroundTypeStyleProps } from "./styles";
import { Header } from "@components/Header";
import { ButtonIcon } from "@components/ButtonIcon";
import { Tag } from "@components/Tag";

import { Alert, View } from "react-native";

import { useRoute, useNavigation } from "@react-navigation/native";

type RouteParams = {
    index: number;
}

export function Show(){

    const navigation = useNavigation();
    const route = useRoute();
    const { index } = route.params as RouteParams;

    function handleShowEdit(){
        navigation.navigate('edit');
    }

    async function handleMealRemove(){
        Alert.alert('Deseja realmente remover o registro de refeição?','', [
            { text: 'Cancelar', style: 'cancel'},
            {text: 'Sim, remover', onPress: () =>{}},
        ]);
    }


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
                    <ButtonIcon 
                        title='Editar refeição' 
                        type="edit"
                        onPress={handleShowEdit}/>
                    
                    
                    <ButtonIcon 
                        title='excluir refeição' 
                        type="remove"
                        onPress={handleMealRemove}
                        />
                </View>
            </Content>
        </Container>
    );
};