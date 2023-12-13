import { Container, Title, BackButton, Icon } from "./styles";

type Props = {
    title: string;
}

export function Header({title}: Props){
    return(
        <Container>
            <Title>{title}</Title>
            <BackButton>
                <Icon/>
            </BackButton>
        </Container>
    );
};