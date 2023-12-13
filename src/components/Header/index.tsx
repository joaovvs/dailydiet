import { Container, Title, BackButton, Icon, HeaderTypeStyleProps } from "./styles";
import { ViewProps } from "react-native";

type Props = ViewProps & {
    title: string;
    type?: HeaderTypeStyleProps;
}

export function Header({title, type = "DEFAULT", ...rest}: Props){
    return(
        <Container 
            type={type} 
            {...rest}
            >
            <Title>{title}</Title>
            <BackButton>
                <Icon/>
            </BackButton>
        </Container>
    );
};