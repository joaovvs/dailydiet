import { Container, Title, BackButton, Icon, HeaderTypeStyleProps } from "./styles";
import { ViewProps } from "react-native";
import { useNavigation } from '@react-navigation/native';

type Props = ViewProps & {
    title: string;
    type?: HeaderTypeStyleProps;
}

export function Header({title, type = "DEFAULT", ...rest}: Props){
    const navigation = useNavigation();
    
    function handleBack(){
        navigation.navigate('home');
    }

    return(
        <Container 
            type={type} 
            {...rest}
            >
            <Title>{title}</Title>
            <BackButton 
                onPress={handleBack}>
                <Icon/>
            </BackButton>
        </Container>
    );
};