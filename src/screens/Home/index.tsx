import { useState, useCallback, useEffect } from "react";
import { Text, Alert, SectionList, ScrollView } from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";

import {
  Container,
  Icon,
  Meals,
  Open,
  Percent,
  Subtitle,
  Title,
  New,
  DayTitle,
  SectionTitle,
} from "./styles";

import { HeaderLogo } from "@components/HeaderLogo";
import { ButtonIcon } from "@components/ButtonIcon";
import { MealCard } from "@components/MealCard";
import { meal } from "src/@types/types";

import { mealsGetAll } from "@storage/meal/mealsGetAll";
import { Loading } from "@components/Loading";

type SectionMeals = {
  title: string;
  data: meal[];
};

export function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [meals, setMeals] = useState<meal[]>([]);
  const [dayList, setDayList] = useState<string[]>([]);
  const [organizedList, setOrganizedList] = useState<SectionMeals[]>([]);

  const navigation = useNavigation();

  function fetchSectionList() {
    const list: SectionMeals[] = dayList.reduce(
      (acc: SectionMeals[], title) => {
        const mealsOfDay = meals.filter((meal) => meal.date === title);
        const mealsOfDaySorted = mealsOfDay.sort((a,b) => a.hour.localeCompare(b.hour))
        acc.push({ title, data: mealsOfDaySorted });

        return acc;
      },
      []
    );

    setOrganizedList(list);
  }

  async function fetchMeals() {
    try {
      setIsLoading(true);
      const data = await mealsGetAll();

      const sortedMeals = [...data].sort((a, b) => a.date.localeCompare(b.date));
      setMeals(sortedMeals);
    } catch (error) {
      console.log(error);
    } finally{
      setIsLoading(false);
    }
  }

  function fetchDayList() {
    const days = [...new Set(meals.map((meal) => meal.date))];
    setDayList(days);

  }

  function calcPercent() {
    const countMeals = meals.length;
    const mealNotInDiet = meals.filter((meal) => meal.isDiet === true).length;
    if (countMeals > 0 && mealNotInDiet > 0) {
      return Number(((mealNotInDiet / countMeals) * 100).toFixed(2));
    }
    if (countMeals > 0 && mealNotInDiet === 0) {
      return 100;
    }
    return 0;
  }

  function handleShowStatistics() {
    navigation.navigate("statistics");
  }

  function handleShowMeal(id: string) {
    navigation.navigate("show", { id });
  }

  function handleNewMeal() {
    navigation.navigate("create");
  }

  useFocusEffect(
    useCallback(() => {
      fetchMeals();
    }, [])
  );

  useEffect(()=>{
    if(meals){
      fetchDayList();
    }
    
  },[meals]);

  useEffect(()=>{
    fetchSectionList();
  },[dayList,meals])

  return (
    <Container>
      <HeaderLogo />
      <Percent isDiet={calcPercent() > 50 ? true : false}>
        <Title>{`${calcPercent()}%`}</Title>
        <Subtitle>das refeições dentro da dieta</Subtitle>
        <Open onPress={handleShowStatistics}>
          <Icon isDiet={calcPercent() > 50 ? true : false} />
        </Open>
      </Percent>
      <Meals>
        <New>
          <SectionTitle>Refeições</SectionTitle>
          <ButtonIcon
            title="Nova refeição"
            type="add"
            onPress={handleNewMeal}
          />
        </New>
      </Meals>
     
    { isLoading ? 
      <Loading/> :
      <SectionList
        sections={organizedList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MealCard
            data={item}
            handleShowMeal={() =>
              handleShowMeal(item.id)
            }
          />
        )}
        renderSectionHeader={({ section }) => <SectionTitle>{section.title}</SectionTitle>}
        contentContainerStyle={
          organizedList.length === 0 && {
            flex: 1,
            alignContent: "center",
            alignItems: "center",
          }
        }
        style={{flex: 1}}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text>Que tal cadastrar sua primeira refeição? </Text>
        )}
      />
    }

    </Container>
  );
}
