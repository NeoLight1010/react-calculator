import { Dispatch } from "react";
import { CalculatorAction } from "../calculatorReducer";

export const concatToQuery = (
    dispatch: Dispatch<CalculatorAction>
): ((value: string) => void) => {
    return (value: string) =>
        dispatch({
            type: "CONCAT_TO_QUERY",
            value,
        });
};
