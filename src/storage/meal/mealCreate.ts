import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "@storage/storageConfig";
import { meal } from "src/@types/types";
import { mealsGetAll } from "./mealsGetAll";

export async function mealCreate(newMeal: meal){
    try {
        const storedMeals = await mealsGetAll();

        const storage = JSON.stringify([...storedMeals,newMeal]);
        await AsyncStorage.setItem(MEAL_COLLECTION, storage);
        
    } catch (error) {
        throw error;
    }
}