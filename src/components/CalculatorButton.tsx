import { useContext } from "react";
import { CalculatorContext } from "../context/calculator/CalculatorContext";

interface CalculatorButtonProps {
    value: string;
}

export const CalculatorButton = ({ value }: CalculatorButtonProps) => {
    const { concatToQuery } = useContext(CalculatorContext);

    const onClick = () => {
        concatToQuery(value);
    };

    return <button onClick={onClick}>{value.toString()}</button>;
};
