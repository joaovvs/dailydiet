import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "@storage/storageConfig";
import { meal } from "src/@types/types";
import { mealsGetAll } from "./mealsGetAll";
import { mealCreate } from "./mealCreate";
import { mealRemove } from "./mealDelete";

export async function mealUpdate(updatedMeal: meal){
    try {
        const storedMeals = await mealsGetAll();
        const existsMeal= storedMeals.filter(meal => meal.id===updatedMeal.id);

        if(existsMeal){
            console.log('prato encontrado');
            /*remove meal*/
            await mealRemove(updatedMeal.id);

            /*include updated meal*/
            await mealCreate(updatedMeal);

        } else{
            await mealCreate(updatedMeal);
        }     
        
    } catch (error) {
        throw error;
    }
}