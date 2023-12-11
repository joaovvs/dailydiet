import { Container, Logo, Portrait } from "./styles";

import logo from '@assets/logo.png'
import portrait from '@assets/portrait.png'

export function Header(){
    return(
        <Container>
            <Logo source={logo}/>
            <Portrait source={portrait}/>
        </Container>
    );
};