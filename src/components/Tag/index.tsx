import { Container, Icon, Title, TagTypeStyleProps } from "./styles";

type Props = {
    type: TagTypeStyleProps;
}

export function Tag({type}: Props){

    return(
        <Container type={type}>
            <Icon type={type}/>
            <Title>{type === 'DIET' ? 'dentro da dieta': 'fora da dieta'}</Title>
        </Container>
    );;
}