import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { ShoppingEdit } from './shopping-edit/shopping-edit';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  imports: [ShoppingEdit],
  templateUrl: './shopping-list.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShoppingList {
  private readonly shoppingListService = inject(ShoppingListService);

  protected readonly ingredients = this.shoppingListService.ingredients;
}
