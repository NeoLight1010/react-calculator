import { useReducer } from "react";
import {calculateResults} from "./actions/calculateResults";
import { concatToQuery } from "./actions/concatToQuery";
import { CalculatorContext } from "./CalculatorContext";
import { calculatorReducer } from "./calculatorReducer";

interface CalculatorProviderProps {
    children: JSX.Element | JSX.Element[];
}

export const CalculatorProvider = ({ children }: CalculatorProviderProps) => {
    const [state, dispatch] = useReducer(calculatorReducer, {
        query: "",
    });

    return (
        <CalculatorContext.Provider
            value={{
                query: state.query,
                concatToQuery: concatToQuery(dispatch),
                calculateResults: calculateResults(dispatch),
            }}
        >
            {children}
        </CalculatorContext.Provider>
    );
};
