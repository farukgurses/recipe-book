import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>()
  recipes: Recipe[] = [
    new Recipe("A test recipe", "test desc", "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F24%2F2014%2F01%2F2089801_hospi037_0.jpg&q=85"),
    new Recipe("Another recipe", "test 2 desc", "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F24%2F2014%2F01%2F2089801_hospi037_0.jpg&q=85"),

  ]
  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe){
      this.recipeWasSelected.emit(recipe)
  }

}
