import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { Injectable } from '@angular/core';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

    private recipes: Recipe[] = [
        new Recipe('A test recipe', 'Just Test', 'https://images.unsplash.com/photo-1541014741259-de529411b96a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1334&q=80',
        [
            new Ingredient('Meat', 1),
            new Ingredient('French Fries', 20)
        ]),
        new Recipe(
        'A second test recipe', 
        'Second Just Test', 
        'https://images.unsplash.com/photo-1542528180-1c2803fa048c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80',
        [
            new Ingredient('Buns', 2),
            new Ingredient('Meat', 1)
        ])
      ];

      constructor(private shoppingListService: ShoppingListService) {}
      getRecipes() {
          return this.recipes.slice();  // get copy of recipes array
      }

      getRecipe(index: number) {
          return this.recipes[index]
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
      }
}