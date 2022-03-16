import { useContext } from "react";
import { CalculatorContext } from "../context/calculator/CalculatorContext";

interface CalculatorButtonProps {
    value: number | "=" | "ac" | "+" | "-" | "*" | "/" | ".";
}

export const CalculatorButton = ({ value }: CalculatorButtonProps) => {
    const { concatToQuery, calculateResults, clear } =
        useContext(CalculatorContext);

    let className: string = "";
    switch (value) {
        case "+":
            className = "calculator-plus";
            break;
        case "=":
            className = "calculator-equals";
            break;
        case 0:
            className = "calculator-zero";
            break;
    }

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

    return (
        <div
            className={["calculator-button", className].join(" ")}
            onClick={onClick}
        >
            {value.toString()}
        </div>
    );
};
