import { Action } from '@ngrx/store';
import { Favorite } from '../favorite-collection/favorites.model';

export enum FavoriteActionType {
  ADD_ITEM = '[FAVORITE] Add Favorite',
}
export class AddItemAction implements Action {
  readonly type = FavoriteActionType.ADD_ITEM;
  //add an optional payload
  constructor(public payload: Favorite) {}
}
export type FavoriteAction = AddItemAction;