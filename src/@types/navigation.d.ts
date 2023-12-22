import { meal } from "./types";

export declare global {
    namespace ReactNavigation {
        interface RootParamList{
            home: undefined;
            statistics: undefined;
            create:undefined;
            feedback: {
                isDiet: boolean;
            }
            show: { 
                id:string;
            };
            edit: {
                id: string;
            };
        }
    }
}