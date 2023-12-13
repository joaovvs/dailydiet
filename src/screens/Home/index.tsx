import { useState,useEffect } from 'react';
import { Alert, FlatList, View } from "react-native";
import { useNavigation } from '@react-navigation/native';

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

export function Home(){
    const [meals, setMeals] = useState<meal []>([{
        name: 'X-tudo',
        description: 'Hamburguer',
        date: '12/12/2022',
        time: '20:00',
        isDiet: false
    },
    {
        name: 'Sanduíche',
        description: 'Sanduiche natural',
        date: '10/08/2022',
        time: '16:00',
        isDiet: true
    },
    {
        name: 'Lasanha de frango com queijo',
        description: 'Lasanha de frango',
        date: '13/08/2023',
        time: '12:30',
        isDiet: true
    },
    {
        name: 'Torta de chocolate',
        description: 'saasdasdasdasdsa',
        date: '13/08/2023',
        time: '09:30',
        isDiet: true
    },
    {
        name: 'teste',
        description: 'saasdasdasdasdsa',
        date: '13/08/2023',
        time: '09:30',
        isDiet: false
    }
    ]);
    const [isDiet,setIsDiet] = useState(true);
    const navigation = useNavigation();

    const [percent, setPercent] = useState(0);

    const [dayList, setDayList] = useState<string []>([]);

    function fetchDayList(){
        const days = [...new Set(meals.map(meal => meal.date))];
        setDayList(days.sort());
    }


     function calcPercent(){
        const  countMeals = meals.length;
        const mealNotInDiet = meals.filter(meal => meal.isDiet===true).length;
        setPercent(mealNotInDiet/countMeals*100);

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


    useEffect(()=>{

        meals && fetchDayList();
        calcPercent();
    },[])
    

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