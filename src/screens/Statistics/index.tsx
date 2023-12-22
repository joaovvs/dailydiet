import { useState, useEffect,useCallback } from 'react';
import { useNavigation, useFocusEffect } from "@react-navigation/native";

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

import { mealsGetAll } from "@storage/meal/mealsGetAll";


export function Statistics(){
    const [meals, setMeals] = useState<meal []>([]);
    
    const navigation = useNavigation();


    
    function handleBack(){
        navigation.navigate('home');
    }

    function calcPercent(){
        const  countMeals = meals.length;
        const mealNotInDiet = meals.filter(meal => meal.isDiet===true).length;
        if(countMeals>0 && mealNotInDiet>0){
           return(Number((mealNotInDiet/countMeals*100).toFixed(2)));
        }
        if(countMeals>0 && mealNotInDiet===0){
                return(100);
        }
        return 0;
    }

    function calcTotalMeals(){
        return meals.length;
    }

    function calcGreaterSequence(){
        let counter = 0;
        let greaterSequence=0;

        meals.map(meal => {
            if(meal.isDiet===true){
                counter++;
                if(counter>greaterSequence){
                    greaterSequence=counter;
                }
            }else{
                counter=0;
            }
        })

        return greaterSequence;
    }

    function calcTotalMealsByDiet(diet: boolean){
        const filteredMeals = meals.filter(meal => meal.isDiet===diet)
        return filteredMeals.length;
    }


    async function fetchMeals(){
        const data= await mealsGetAll();
        setMeals(data);
    } 

    useFocusEffect(useCallback(()=>{
        fetchMeals();
    },[]));

    useEffect(()=>{
        calcPercent();
    },[meals])

    return(
        <Container isDiet={calcPercent() > 50 ? true: false}>
            <Percent isDiet={calcPercent() > 50 ? true: false}>
                <PercentTitle>{`${calcPercent()}%`}</PercentTitle>
                <PercentSubtitle>das refeições dentro da dieta</PercentSubtitle>
                <BackButton
                    onPress={handleBack}>
                    <Icon isDiet={calcPercent() > 50 ? true: false}/>
                </BackButton>
            </Percent>
            <Content>
                <Title>Estatísticas gerais</Title>
                <Data>
                    <Sequence>
                        <ValueTitle>{calcGreaterSequence()}</ValueTitle>
                        <ValueSubtitle>melhor sequência de pratos dentro da dieta</ValueSubtitle>
                    </Sequence>
                    <Total>
                        <ValueTitle>{calcTotalMeals()}</ValueTitle>
                        <ValueSubtitle>refeições registradas</ValueSubtitle>
                    </Total>
                    <Info>
                        <Success>
                            <ValueTitle>{calcTotalMealsByDiet(true)}</ValueTitle>
                            <ValueSubtitle>Refeições dentro da dieta</ValueSubtitle>
                        </Success>
                        <Fail>
                            <ValueTitle>{calcTotalMealsByDiet(false)}</ValueTitle>
                            <ValueSubtitle>Refeições fora da dieta</ValueSubtitle>
                        </Fail>
                    </Info>
                </Data>
            </Content>
        </Container>
    );
};