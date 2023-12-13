import { Container, Time, Title, Status, Divider } from "./styles";
import { TouchableOpacityProps } from 'react-native';




type Props = TouchableOpacityProps & {
    name: string,
    time: string,
    isDiet: boolean
    handleShowMeal: () => void;
};



export function MealCard({time, name, isDiet, handleShowMeal ,...rest}: Props){


    return(
        <Container {...rest} 
        onPress={handleShowMeal}>
            <Time>{time}</Time>
            <Divider/>
            <Title>{name}</Title>
            <Status isDiet={isDiet}/>
        </Container>
    )
}

