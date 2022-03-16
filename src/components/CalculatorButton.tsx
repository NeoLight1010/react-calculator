import { useContext } from "react";
import { CalculatorContext } from "../context/calculator/CalculatorContext";

interface CalculatorButtonProps {
    value: number | "=" | "ac" | "+" | "-" | "*" | "/";
}

export const CalculatorButton = ({ value }: CalculatorButtonProps) => {
    const { concatToQuery, calculateResults, clear } = useContext(CalculatorContext);

    const onClick = () => {
        switch (value) {
            case "=":
                calculateResults();
                break;
            case "ac":
                clear();
                break;
            default:
                concatToQuery(value.toString());
        }
    };

    return <div className="calculator-button" onClick={onClick}>{value.toString()}</div>;
};
