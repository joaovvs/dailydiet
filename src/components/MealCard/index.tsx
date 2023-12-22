import { meal } from "src/@types/types";
import { Container, Time, Title, Status, Divider } from "./styles";
import { TouchableOpacityProps } from 'react-native';




type Props = TouchableOpacityProps & {
    data: meal;
    handleShowMeal: (name: string, data: string, hour: string) => void;
};



export function MealCard({data, handleShowMeal ,...rest}: Props){


    return(
        <Container {...rest} 
        onPress={() => handleShowMeal(data.name,data.date,data.hour)}>
            <Time>{data.hour}</Time>
            <Divider/>
            <Title>{data.name}</Title>
            <Status isDiet={data.isDiet}/>
        </Container>
    )
}

