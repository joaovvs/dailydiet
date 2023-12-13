import { meal } from "./types";

export declare global {
    namespace ReactNavigation {
        interface RootParamList{
            home: undefined;
            statistics: { 
                percent: number; 
            };
            create: undefined;
            feedback: {
                isDiet: boolean;
            }
            show: undefined;
            edit: undefined;
        }
    }
}