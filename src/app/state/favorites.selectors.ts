import { createSelector, createFeatureSelector } from "@ngrx/store";
import { AppState } from "./app.state";
import { Favorite } from "../favorite-collection/favorites.model";

export const selectAllFavorites = (state: AppState) => state.favorites;