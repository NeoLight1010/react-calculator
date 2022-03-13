import { Reducer } from "react";

export interface CalculatorState {
    query: string;
}

export type CalculatorAction = { type: "CONCAT_TO_QUERY"; value: string };

export const calculatorReducer: Reducer<CalculatorState, CalculatorAction> = (
    state,
    action
) => {
    switch (action.type) {
        case "CONCAT_TO_QUERY":
            return {
                ...state,
                query: `${state.query}${action.value}`
            };

        default:
            return state;
    }
};
