import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { Recipe } from '../../shared/recipe.model';
import { DropdownDirective } from '../../shared/dropdown.directive';

@Component({
  selector: 'app-recipe-detail',
  imports: [DropdownDirective],
  templateUrl: './recipe-detail.html',
  styleUrl: './recipe-detail.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecipeDetail {
  public readonly recipe = input.required<Recipe>();
}
