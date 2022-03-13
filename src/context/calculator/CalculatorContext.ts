import { createContext } from "react";
import {concatToQuery} from "./actions/concatToQuery";
import { CalculatorState } from "./calculatorReducer";

interface CalculatorContextProps {
    query: CalculatorState["query"];
    concatToQuery: ReturnType<typeof concatToQuery>;
}

export const CalculatorContext = createContext<CalculatorContextProps>(
    {} as CalculatorContextProps
);
