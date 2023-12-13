import { Container, FeedbackArea, Title,Subtitle,BoldSubtitle } from "./styles";

import { Image } from "react-native";
import dietImg from '@assets/diet-illustration.png'
import notDietImg from '@assets/notdiet-illustration.png'
import { ButtonIcon } from "@components/ButtonIcon";
import { useState } from "react";


export function Feedback(){
    const [isDiet, setIsDiet] = useState(false);
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
            <ButtonIcon title="Ir para a página inicial"/>
        </Container>
    );
};