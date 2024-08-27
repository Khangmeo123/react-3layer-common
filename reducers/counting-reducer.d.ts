import type { Reducer } from 'react';
export declare enum CountingReducerActionType {
    INCREASE = 0,
    DECREASE = 1,
    SET = 2,
    RESET = 3
}
export interface CountingReducerAction {
    type: CountingReducerActionType;
    value?: number;
}
export type CountingReducer = Reducer<number, CountingReducerAction>;
export declare function countingReducer(state: number, action: CountingReducerAction): number;
