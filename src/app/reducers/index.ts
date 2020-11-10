import {
  ActionReducerMap,
  createReducer,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';

export interface IAppState {
}
export const initialState: IAppState = {};
export const appReducer = createReducer(initialState);

export const reducers: ActionReducerMap<IAppState> = {

};


export const metaReducers: MetaReducer<IAppState>[] = !environment.production ? [] : [];
