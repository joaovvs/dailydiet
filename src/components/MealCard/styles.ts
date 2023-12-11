import styled,{css} from "styled-components/native";
import { Circle, IconProps } from 'phosphor-react-native';

import { TouchableOpacity} from 'react-native'

type Props = IconProps & {
    isDiet: boolean;
}

type StatusProps = {
    isDiet: boolean;
}

export const Container = styled(TouchableOpacity)`
    flex: 1;
    flex-direction: row;
    border-radius: 6px;
    align-items: center;

    border: 1px solid ${({theme})=> theme.COLORS.GRAY_300};

    padding: 14px 12px;

    gap: 12px;

    margin-bottom: 6px;
`;

export const Time = styled.Text`
    ${({theme}) => css`
        font-size: ${theme.FONT_SIZE.XS}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
        color: ${theme.COLORS.GRAY_700};
    `}
`
export const Title = styled.Text`
    flex: 1;
    ${({theme}) => css`
        font-size: ${theme.FONT_SIZE.MD}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
        color: ${theme.COLORS.GRAY_600};
    `}
`;




export const Status = styled(Circle).attrs<StatusProps>(({theme, isDiet})=> ({
    size: 14,
    color: isDiet ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID,
    weight: 'fill'
}))<StatusProps>`
`;

export const Divider = styled.View`
    width: 1px;
    height: 14px;
    background-color: ${({theme})=> theme.COLORS.GRAY_400};
`