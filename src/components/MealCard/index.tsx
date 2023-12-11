import { Container, Time, Title, Status, Divider } from "./styles";
import { TouchableOpacityProps } from 'react-native';




type Props = TouchableOpacityProps & {
    name: string,
    time: string,
    isDiet: boolean
};



export function MealCard({time, name, isDiet ,...rest}: Props){
    return(
        <Container {...rest}>
            <Time>{time}</Time>
            <Divider/>
            <Title>{name}</Title>
            <Status isDiet={isDiet}/>
        </Container>
    )
}

