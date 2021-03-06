import { createContext } from "react";
import {calculateResults} from "./actions/calculateResults";
import {clear} from "./actions/clear";
import {concatToQuery} from "./actions/concatToQuery";
import { CalculatorState } from "./calculatorReducer";

interface CalculatorContextProps {
    query: CalculatorState["query"];
    concatToQuery: ReturnType<typeof concatToQuery>;
    calculateResults: ReturnType<typeof calculateResults>;
    clear: ReturnType<typeof clear>;
}

export const CalculatorContext = createContext<CalculatorContextProps>(
    {} as CalculatorContextProps
);
