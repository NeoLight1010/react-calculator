import { Reducer } from "react";

export interface CalculatorState {
    query: string;
}

export type CalculatorAction =
    | { type: "CONCAT_TO_QUERY"; value: string }
    | { type: "CALC_RESULTS" }
    | { type: "CLEAR" };

export const calculatorReducer: Reducer<CalculatorState, CalculatorAction> = (
    state,
    action
) => {
    switch (action.type) {
        case "CONCAT_TO_QUERY":
            return {
                ...state,
                query: `${state.query}${action.value}`,
            };

        case "CALC_RESULTS":
            return {
                ...state,
                query: `${Function("return " + state.query)()}`,
            };

        case "CLEAR":
            return {
                ...state,
                query: "",
            }

        default:
            return state;
    }
};
