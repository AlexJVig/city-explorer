import { FavoriteAction, FavoriteActionType } from './favorites.actions';
import { Favorite } from '../favorite-collection/favorites.model';

//create a dummy initial state
const initialState: Array<Favorite> = [
  {
    city: 'Jerusalem',
    previewSrc: 'nothing also'
  }
];

export function favoriteReducer(
  state: Array<Favorite> = initialState,
  action: FavoriteAction
) {
  switch (action.type) {
    case FavoriteActionType.ADD_ITEM:
      return [...state, action.payload];
    default:
      return state;
  }
}
