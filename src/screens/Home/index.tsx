import { Container, 
    Icon, 
    Meals, 
    Open, 
    Percent, 
    Subtitle, 
    Title,
    New,
    SectionTitle } from "./styles";




import { Header } from "@components/Header";
import { ButtonIcon } from "@components/ButtonIcon";

export function Home(){
    return(
        <Container>
            <Header/>
            <Percent>
                <Title>90,86%</Title>
                <Subtitle>das refeições dentro da dieta</Subtitle>
                <Open>
                    <Icon/>
                </Open>
            </Percent>
            <Meals>
                <New>
                    <SectionTitle>Refeições</SectionTitle>
                    <ButtonIcon 
                        title="Nova refeição" 
                        type='remove'
                    />
                </New>
            </Meals>
        </Container>
    )
}