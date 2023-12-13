import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "@screens/Home";
import { Statistics } from "@screens/Statistics";
import { Create } from "@screens/Create";
import { Feedback } from "@screens/Feedback";
import { Show } from "@screens/Show";
import { Edit } from "@screens/Edit";
import { meal } from 'src/@types/types';

const { Navigator, Screen} = createNativeStackNavigator();


export function AppRoutes(){
    return (
        <Navigator initialRouteName="home" screenOptions={{headerShown: false}}>
            <Screen
            name='home'
            component={Home}
            />

            <Screen
            name='statistics'
            component={Statistics}
            />

            <Screen
            name='create'
            component={Create}
            />

            <Screen
            name='feedback'
            component={Feedback}
            />

            <Screen
            name='show'
            component={Show}
            />

            <Screen
            name='edit'
            component={Edit}
            />

        </Navigator>
    )

}