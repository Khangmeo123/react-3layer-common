import type { Reducer } from 'react';
export declare function booleanReducer(state: boolean, action: BooleanAction): boolean;
export type BooleanAction = 'toggle' | 'true' | 'false';
export type BooleanReducer = Reducer<boolean, BooleanAction>;
