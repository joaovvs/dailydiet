import { Header } from "@components/Header";
import { useState } from "react";
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


export function Edit() {
  const [diet, setDiet] = useState(true);

  return (
    <Container>
      <Header title="Editar refeição"></Header>
      <Content>
        <Form>
          <Input title="Nome" keyboardType="name-phone-pad" />
          <Input title="Descrição" multiline={true} numberOfLines={5} />

          <DateAndTime>
            <Input title="Data" />
            <Input title="Hora" />
          </DateAndTime>
          <Diet>
            <DietTitle>Está dentro da dieta?</DietTitle>
            <Options>
              <Select
                title="Sim"
                isActive={diet}
                type="DIET"
                onPress={() => setDiet(true)}
              />
              <Select
                title="Não"
                isActive={!diet}
                type="NOTDIET"
                onPress={() => setDiet(false)}
              />
            </Options>
          </Diet>
          <ButtonIcon title="Salvar alterações" />
        </Form>

      </Content>
    </Container>
  );
}
