import { TouchableOpacityProps } from 'react-native';


import { Container, Icon, Title, SelectStyleProps } from './styles';


type Props = TouchableOpacityProps & SelectStyleProps & {
    title: string;
}

export function Select({ title, isActive = false , type, ...rest}: Props){
    return(
        <Container 
        type={type}
        isActive={isActive}
        {...rest}
        >
            <Icon isActive={isActive} type={type}/>
            <Title>{title}</Title>
        </Container>
    )
};