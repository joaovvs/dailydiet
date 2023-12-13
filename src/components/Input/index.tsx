import { Container, InputField, Label } from "./styles";

import { useTheme } from "styled-components/native";

import { useEffect, useState } from "react";
import { TextInputProps } from "react-native";

type Props = TextInputProps & {
    title: string;
}
export function Input({title, ...rest}: Props){
    const [active, setActive] = useState(false);

    const theme = useTheme();

    useEffect(() => {

      }, []);
    return(
        <Container>
            <Label>{title}</Label>
            <InputField isActive={active} {...rest}
             cursorColor={theme.COLORS.GRAY_700}
             onFocus={()=> setActive(true)}
             onBlur={()=> setActive(false)}
             textAlignVertical="top"/>
        </Container>
    );
};