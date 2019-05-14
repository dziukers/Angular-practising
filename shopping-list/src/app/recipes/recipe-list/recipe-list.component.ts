import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() selectedRecipe = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'Just Test', 'https://images.unsplash.com/photo-1541014741259-de529411b96a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1334&q=80'),
    new Recipe('A second test recipe', 'Second Just Test', 'https://images.unsplash.com/photo-1541014741259-de529411b96a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1334&q=80')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe) {
    this.selectedRecipe.emit(recipe);
  }
}
