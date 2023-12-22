import { useState } from "react";
import { useNavigation} from '@react-navigation/native';

import {
  Container,
  Content,
  DateAndTime,
  Diet,
  Options,
  DietTitle,
  Form,
} from "./styles";

import { Header } from "@components/Header";
import { Input } from "@components/Input";
import { ButtonIcon } from "@components/ButtonIcon";
import { Select } from "@components/Select";
import { meal } from "src/@types/types";
import { Alert } from "react-native";
import { mealCreate } from "@storage/meal/mealCreate";
import { AppError } from "@utils/AppError";



export function Create() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [hour, setHour] = useState('');
  const [isDiet, setIsDiet] = useState(true);

  const navigation = useNavigation();






  async function handleNewMeal(){
      if(!name || !description || !date || !hour){
        return Alert.alert('Preencha todos os campos');
      }
      const id = Math.floor(Date.now() * Math.random()).toString(36);

      const newMeal: meal = {id, name, description, date, hour: hour, isDiet}
      try {
        await mealCreate(newMeal);
        navigation.navigate('home');
      } catch (error) {
        console.log(error);
        throw new AppError('Não foi possível cadastrar a refeição');
      }
  }

  return (
    <Container>
      <Header title="Nova Refeição"></Header>
      <Content>
        <Form>
          <Input 
          title="Nome" 
          keyboardType="name-phone-pad"
          onChangeText={setName} />
          
          <Input title="Descrição" 
                  multiline={true} 
                  numberOfLines={5} 
                  onChangeText={setDescription}/>

          <DateAndTime>
            <Input 
              title="Data" 
              onChangeText={setDate}
              />
            <Input 
            title="Hora" 
            onChangeText={setHour}/>
          </DateAndTime>
          <Diet>
            <DietTitle>Está dentro da dieta?</DietTitle>
            <Options>
              <Select
                title="Sim"
                isActive={isDiet}
                type="DIET"
                onPress={() => setIsDiet(true)}
              />
              <Select
                title="Não"
                isActive={!isDiet}
                type="NOTDIET"
                onPress={() => setIsDiet(false)}
              />
            </Options>
          </Diet>
          <ButtonIcon 
          title="Cadastrar refeição" 
          onPress={handleNewMeal}/>
        </Form>
      </Content>
    </Container>
  );
}
