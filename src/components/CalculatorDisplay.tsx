import { useContext } from "react";
import { CalculatorContext } from "../context/calculator/CalculatorContext";

export const CalculatorDisplay = () => {
    const { query } = useContext(CalculatorContext);

    return <span>{query}</span>;
};
