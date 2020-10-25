import {Ingredient} from '../shared/ingredient.model';
import { Subject } from "rxjs";
export class ShoppingListService{

  ingredientsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();
    private ingredients:Ingredient[] = [
        new Ingredient('Apple',5),
        new Ingredient('Tomatoes',10)
      ];

    getIngredients(){
      return this.ingredients.slice();
    }
    getIngredient(index:number){
      return this.ingredients[index];
    }

    addIngredient(ingredient: Ingredient){
      this.ingredients.push(ingredient);
      this.ingredientsChanged.next(this.ingredients.slice());
  }

  addMultipleIngredients(ingredientArr: Ingredient[]){
    this.ingredients.push(...ingredientArr);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
  updateIngredient(index:number,newIngredient:Ingredient){
    this.ingredients[index] = newIngredient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }
  

}