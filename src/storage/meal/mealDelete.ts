import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "@storage/storageConfig";
import { mealsGetAll } from "./mealsGetAll";

export async function mealRemove(removedId: string){
    try {
        console.log(removedId);
        const storage = await mealsGetAll();

        const filtered = storage.filter(meal => (
            meal.id !== removedId) );
        console.log(filtered);  
        const meals = JSON.stringify(filtered);
        console.log(meals);

        await AsyncStorage.setItem(MEAL_COLLECTION, meals);
    } catch (error) {
        throw error;
    }
}