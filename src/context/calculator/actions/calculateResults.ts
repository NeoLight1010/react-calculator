import { Dispatch } from "react";
import { CalculatorAction } from "../calculatorReducer";

export const calculateResults = (dispatch: Dispatch<CalculatorAction>) => {
    return () => {
        dispatch({
            type: "CALC_RESULTS",
        });
    };
};
