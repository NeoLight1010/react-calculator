import { useContext } from "react";
import { CalculatorContext } from "../context/calculator/CalculatorContext";

interface CalculatorButtonProps {
    value: string;
}

export const CalculatorButton = ({ value }: CalculatorButtonProps) => {
    const { concatToQuery, calculateResults } = useContext(CalculatorContext);

    const onClick = () => {
        if (value === "=") {
            calculateResults();
            return;
        }

        concatToQuery(value);
    };

    return <button onClick={onClick}>{value.toString()}</button>;
};
