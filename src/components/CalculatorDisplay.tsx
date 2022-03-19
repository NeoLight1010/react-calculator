import { useContext } from "react";
import { CalculatorContext } from "../context/calculator/CalculatorContext";

export const CalculatorDisplay = () => {
    const { query } = useContext(CalculatorContext);

    return (
        <div className="calculator-display">
            <span>{query}</span>
        </div>
    );
};
