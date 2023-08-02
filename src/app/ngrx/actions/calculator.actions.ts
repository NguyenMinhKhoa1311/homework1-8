import { createAction, props } from '@ngrx/store';

export const pressKeyWord = createAction('[Calculator] inputKeyWord',props<{ number: string }>() );
export const pressOperation = createAction('[Calculator] inputOperation',props<{ number: string }>());
export const reset = createAction('[Calculator] clear');