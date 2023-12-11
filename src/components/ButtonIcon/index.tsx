import { TouchableOpacityProps } from 'react-native';

import { Container, Title,ButtonIconTypeStyleProps } from "./styles";

import { Plus, Trash, PencilSimpleLine } from 'phosphor-react-native';

import { useTheme } from 'styled-components/native';


type Props = TouchableOpacityProps &{
    title: string
    type?: ButtonIconTypeStyleProps
}

export function ButtonIcon({title, type='none', ...rest}: Props){
    const theme = useTheme();
    
    function iconRender(){
        switch (type) {
            case 'add':
                return <Plus size={18} color={theme.COLORS.WHITE}/>
            case 'remove':
                return <Trash  size={18} color={theme.COLORS.GRAY_700}/>
            case 'edit':
                return <PencilSimpleLine size={18} color={theme.COLORS.WHITE}/>
            default:
                return '';
        }
    }

    return(
        <Container type={type} {...rest}>
            { iconRender()}
            <Title type={type}>{title}</Title>
        </Container>
    );
};