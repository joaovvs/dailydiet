import styled, {css} from "styled-components/native";
import { Circle, IconProps } from "phosphor-react-native";

export type TagTypeStyleProps = 'DIET' | 'NOTDIET';

type Props = IconProps & {
    type: TagTypeStyleProps;
}

export const Container = styled.View<Props>`
    flex-direction: row;

    width: ${({type}) => type==='DIET' ? 143: 127}px;
    align-items: center;
    gap: 8px;
    background-color: ${({theme})=> theme.COLORS.GRAY_200};
    border-radius: 100px;

    padding: 8px 16px;
`;

export const Title = styled.Text`
    ${({theme})=> css`
        color: ${theme.COLORS.GRAY_700};
        font-size: ${theme.FONT_SIZE.SM}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
    `};
`;

export const Icon = styled(Circle).attrs<Props>(({theme, type})=>({
    size: 8,
    color: type==="DIET" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
    weight: 'fill'
}))<Props>``;