import { Header } from "@components/Header";
import { useState } from 'react';
import { Container, Content, DateAndTime, Diet, Form } from "./styles";

import { Input } from "@components/Input";
import { ButtonIcon } from "@components/ButtonIcon";
import { Select } from "@components/Select";


export function Create(){
    const [diet, setDiet] = useState("Sim"); 
    return(
        <Container>
            <Header title='Nova Refeição'></Header>
            <Content>
                <Form>
                        <Input title='Nome' keyboardType="name-phone-pad"/>
                        <Input title='Descrição' multiline={true} numberOfLines={5}/>
                    
                    <DateAndTime>
                        <Input title='Data'/>
                        <Input title='Hora'/>
                    </DateAndTime>
                    <Diet>
                        <Select title="Sim" isActive={false} type="DIET"/>
                        <Select title="Não" isActive={false} type="NOTDIET"/>
                        
                    </Diet>

                    <ButtonIcon title="Cadastrar refeição"/>
                </Form>

                

                
            </Content>
        </Container>
    );
} ;