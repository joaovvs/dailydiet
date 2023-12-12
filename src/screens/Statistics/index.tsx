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

export function Statistics(){
    return(
        <Container isDiet={false}>
            <Percent isDiet={false}>
                <PercentTitle>90,86%</PercentTitle>
                <PercentSubtitle>das refeições dentro da dieta</PercentSubtitle>
                <BackButton>
                    <Icon isDiet={false}/>
                </BackButton>
            </Percent>
            <Content>
                <Title>Estatísticas gerais</Title>
                <Data>
                    <Sequence>
                        <ValueTitle>22</ValueTitle>
                        <ValueSubtitle>melhor sequência de pratos dentro da dieta</ValueSubtitle>
                    </Sequence>
                    <Total>
                        <ValueTitle>109</ValueTitle>
                        <ValueSubtitle>refeições registradas</ValueSubtitle>
                    </Total>
                    <Info>
                        <Success>
                            <ValueTitle>99</ValueTitle>
                            <ValueSubtitle>Refeições dentro da dieta</ValueSubtitle>
                        </Success>
                        <Fail>
                            <ValueTitle>10</ValueTitle>
                            <ValueSubtitle>Refeições fora da dieta</ValueSubtitle>
                        </Fail>
                    </Info>
                </Data>
            </Content>
        </Container>
    );
};