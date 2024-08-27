/**
 * Boolean state
 */
export type BooleanState = [
    boolean,
    () => void,
    () => void,
    () => void
];
/**
 * Boolean state hook
 *
 * @param initialState {boolean} - initial state
 *
 * @return {BooleanState}
 */
export declare function useBoolean(initialState: boolean): BooleanState;
