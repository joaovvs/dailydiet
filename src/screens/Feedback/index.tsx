import { useNavigation, useRoute } from "@react-navigation/native";
import { Image } from "react-native";


import { Container, FeedbackArea, Title,Subtitle,BoldSubtitle } from "./styles";
import { ButtonIcon } from "@components/ButtonIcon";

import dietImg from '@assets/diet-illustration.png'
import notDietImg from '@assets/notdiet-illustration.png'

type RouteParams = {
    isDiet: boolean;
  };

export function Feedback(){

    const route = useRoute();
    const { isDiet } = route.params as RouteParams;

    const navigation = useNavigation();

    function handleGoHome(){
        navigation.navigate('home');
    }
    
    function feedbackSubtitleText(){
        if(isDiet){
            return( 
                <>
                <Subtitle>
                    Você continua <BoldSubtitle>
                    dentro da dieta.
                </BoldSubtitle> Muito bem!
                </Subtitle>
                </>
            )
        }else {
            return (                       
                <>
                    <Subtitle>
                        Você <BoldSubtitle>saiu da dieta</BoldSubtitle> dessa vez, mas continue se esforçando e não desista!
                    </Subtitle>
                </>)
        }
    }

    return(
        <Container>
            <FeedbackArea>
                <Title isDiet={isDiet}>
                    {isDiet ? 'Continue assim!': 'Que pena!'}
                </Title>
                 { feedbackSubtitleText() }
            </FeedbackArea>
            <Image 
                source={isDiet ? dietImg: notDietImg}
                style={{marginVertical: 20}}
            />
            <ButtonIcon 
                title="Ir para a página inicial"
                onPress={handleGoHome}/>
        </Container>
    );
};