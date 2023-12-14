import { useState,useCallback } from 'react';
import { Alert, FlatList, View } from "react-native";
import { useNavigation, useFocusEffect } from '@react-navigation/native';

import { Container, 
    Icon, 
    Meals, 
    Open, 
    Percent, 
    Subtitle, 
    Title,
    New,
    DayTitle,
    SectionTitle } from "./styles";


import { HeaderLogo } from "@components/HeaderLogo";
import { ButtonIcon } from "@components/ButtonIcon";
import { MealCard } from "@components/MealCard";
import { meal } from 'src/@types/types';
import { mealsGetAll } from '@storage/meal/mealsGetAll';

export function Home(){
    const [meals, setMeals] = useState<meal []>([]);
    const [isDiet,setIsDiet] = useState(true);
    const navigation = useNavigation();

    const [percent, setPercent] = useState(0);

    const [dayList, setDayList] = useState<string []>([]);

    async function fetchMeals(){
        try {
           const data = await mealsGetAll();
           setMeals(data);
        } catch (error) {
            console.log(error);
        }
    }

    function fetchDayList(){
        const days = [...new Set(meals.map(meal => meal.date))];
        setDayList(days.sort());
    }


     function calcPercent(){
        const  countMeals = meals.length;
        const mealNotInDiet = meals.filter(meal => meal.isDiet===true).length;
        if(countMeals>0 && mealNotInDiet>0){
            setPercent(mealNotInDiet/countMeals*100);
        }
        if(countMeals>0 && mealNotInDiet===0){
                setPercent(100);
        }
    }

    function handleShowStatistics(){
        navigation.navigate('statistics', {percent});
    } 

    function handleShowMeal(){
        navigation.navigate('show');
    }

    function handleNewMeal(){
        navigation.navigate('create');
    }


    useFocusEffect(useCallback(()=>{
        fetchMeals();
        fetchDayList();
        calcPercent();
        console.log(meals);
    },[]));
    

    return(
        <Container>
            <HeaderLogo/>
            <Percent isDiet={percent>50 ? true: false}>
                <Title>{`${percent}%`}</Title>
                <Subtitle>das refeições dentro da dieta</Subtitle>
                <Open onPress={handleShowStatistics}>
                    <Icon isDiet={percent>50 ? true: false}/>
                </Open>
            </Percent>
            <Meals>
                <New>
                    <SectionTitle>Refeições</SectionTitle>
                    <ButtonIcon 
                        title="Nova refeição" 
                        type='add'
                        onPress={handleNewMeal}
                    />
                </New>
            </Meals>

            <FlatList 
                data={dayList}
                keyExtractor={(item,index) => String(index)}
                renderItem={({item})=> (
                <View>
                    <DayTitle>{item}</DayTitle>
                       <FlatList
                            data={ meals.filter(meal => meal.date==item) }
                            keyExtractor={(meal) => meal.name}
                            renderItem={({ item })=> (
                                <MealCard 
                                    name={item.name} 
                                    time={item.time}
                                    isDiet={item.isDiet}
                                    handleShowMeal={handleShowMeal}
                                    />)}
                            />
                    </View>
                    )}
                    />  
        </Container>
    )
}