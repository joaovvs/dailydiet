import { Header } from "@components/Header";
import { useState, useEffect } from "react";
import { Alert } from 'react-native';
import {
  Container,
  Content,
  DateAndTime,
  Diet,
  Options,
  DietTitle,
  Form,
} from "./styles";

import { Input } from "@components/Input";
import { ButtonIcon } from "@components/ButtonIcon";
import { Select } from "@components/Select";
import { useNavigation, useRoute } from "@react-navigation/native";

import { mealsGetById } from "@storage/meal/mealsGetById";
import { meal } from "src/@types/types";
import { mealUpdate } from "@storage/meal/mealUpdate";

type RouteParams = {
  id: string;
};

export function Edit() {

  const [isLoading, setIsLoading] = useState(true);
  const [isUpdating, setIsUpdating] = useState(true);
  const [meal, setMeal] = useState<meal>({} as meal);

  const route = useRoute();
  const { id } = route.params as RouteParams;

  const navigation = useNavigation();

  async function fetchMeal() {
    try {
      setIsLoading(true);
      const mealSelected = await mealsGetById(id);
      if (mealSelected) {
        setMeal(mealSelected);
      }
    } catch (error) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  }

  async function handleUpdate(){
    try {
      setIsUpdating(true);

      await mealUpdate(meal);

      Alert.alert('Registro atualizado com sucesso!');

      navigation.navigate('home');
    } catch (error) {
      Alert.alert('Não foi possível atualizar o registro. Tente novamente');
      console.log(error);
    }
  }

  useEffect(() => {
    fetchMeal();
  }, []);

  return (
    <Container>
      <Header title="Editar refeição"></Header>
      <Content>
        <Form showsVerticalScrollIndicator={false}>
          <Input
            title="Nome"
            keyboardType="name-phone-pad"
            value={meal.name}
            onChangeText={(text) => setMeal({ ...meal, name: text })}
          />
          <Input
            title="Descrição"
            multiline={true}
            numberOfLines={5}
            value={meal.description}
            onChangeText={(text) => setMeal({ ...meal, description: text })}
          />

          <DateAndTime>
            <Input 
            title="Data" 
            value={meal.date}
            onChangeText={(text) => setMeal({ ...meal, date: text })}
            />
            <Input 
            title="Hora" 
            value={meal.hour}
            onChangeText={(text) => setMeal({ ...meal, hour: text })}
            />
          </DateAndTime>
          <Diet>
            <DietTitle>Está dentro da dieta?</DietTitle>
            <Options>
              <Select
                title="Sim"
                isActive={meal.isDiet}
                type="DIET"
                onPress={() => setMeal({ ...meal, isDiet: true })}
              />
              <Select
                title="Não"
                isActive={!meal.isDiet}
                type="NOTDIET"
                onPress={() => setMeal({ ...meal, isDiet: false })}
              />
            </Options>
          </Diet>
          <ButtonIcon 
            title="Salvar alterações"
            onPress={handleUpdate}/>
        </Form>
      </Content>
    </Container>
  );
}
