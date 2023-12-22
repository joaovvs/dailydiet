import { useState, useEffect } from 'react';
import { useRoute, useNavigation, useFocusEffect } from "@react-navigation/native";

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

import { mealRemove } from '@storage/meal/mealDelete';
import { mealsGetById } from '@storage/meal/mealsGetById';
import { meal } from 'src/@types/types';


type RouteParams = {
    id: string;
}

export function Show(){
    const [meal,setMeal] = useState<meal>();
    const navigation = useNavigation();
    const route = useRoute();
    const { id } = route.params as RouteParams;

    function handleShowEdit(){
        navigation.navigate('edit', {id});
    }

    async function handleMealRemove(id: string){
        Alert.alert('Deseja realmente remover o registro de refeição?','', [
            { text: 'Cancelar', style: 'cancel'},
            {text: 'Sim, remover', onPress: async () =>  {
                await mealRemove(id);
                Alert.alert('Refeição removida com sucesso');
                navigation.navigate('home');
            }},
        ]);
    }

    async function fetchMeal(){

        try {
            const mealSelected = await mealsGetById(id);

            setMeal(mealSelected);
        } catch (error) {
            throw error;
        }
      
    }

    useEffect(()=>{
        fetchMeal();
    },[]);

    return(
        <Container type={meal?.isDiet? 'DIET': 'NOTDIET'}>
            <Header title='Refeição' type={meal?.isDiet? 'DIET': 'NOTDIET'} />
            <Content>
                <Info>
                    <View style={{gap: 8}}>
                        <TitleMeal>{meal?.name}</TitleMeal>
                        <TextContent>{meal?.description}</TextContent>
                    </View>
                    <View style={{gap: 8}}>
                        <TitleDateAndTime>Data e hora</TitleDateAndTime>
                        <TextContent>{meal?.date} às {meal?.hour}</TextContent>
                    </View>
                    <Tag type={meal?.isDiet? 'DIET': 'NOTDIET'}/>
                </Info>

                <View style={{gap: 8}}>
                    <ButtonIcon 
                        title='Editar refeição' 
                        type="edit"
                        onPress={handleShowEdit}/>
                    
                    
                    <ButtonIcon 
                        title='excluir refeição' 
                        type="remove"
                        onPress={()=> meal && handleMealRemove(meal.id)}
                        />
                </View>
            </Content>
        </Container>
    );
};