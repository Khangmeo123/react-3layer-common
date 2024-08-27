import type { Reducer } from 'react';
export type ListReducer<T> = Reducer<T[], ListReducerAction<T>>;
export declare enum ListReducerActionType {
    ADD = 0,
    UPDATE = 1,
    DELETE = 2,
    RESET = 3,
    REVERSE = 4
}
export interface ListReducerAction<T> {
    type: ListReducerActionType;
    index?: number;
    element?: T;
    list?: T[];
}
export declare function listReducer<T>(state: T[], action: ListReducerAction<T>): T[];
