import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "@storage/storageConfig";
import { meal } from "src/@types/types";


export async function mealsGetById( id : string) {
    try {
        const storage = await AsyncStorage.getItem(MEAL_COLLECTION);
    
        const meals: meal[] = storage ? JSON.parse(storage): []
        const meal = meals.filter((meal)=> meal.id===id);
        return meal.at(0);
    } catch (error) {
        throw error;
    }
}