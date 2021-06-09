import { Favorite } from '../favorite-collection/favorites.model';

export interface AppState {
  readonly favorites: Array<Favorite>;
}