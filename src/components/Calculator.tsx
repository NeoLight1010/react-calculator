import { CalculatorProvider } from "../context/calculator/CalculatorProvider";
import { CalculatorButton } from "./CalculatorButton";
import { CalculatorDisplay } from "./CalculatorDisplay";

import "../styles/calculator.css";

export const Calculator = () => {
    return (
        <CalculatorProvider>
            <div className="calculator-container">
                <CalculatorDisplay />

                <div className="calculator-buttons-container" >
                    <CalculatorButton value="ac" />
                    <CalculatorButton value="/" />
                    <CalculatorButton value="*" />
                    <CalculatorButton value="-" />

                    <CalculatorButton value={1} />
                    <CalculatorButton value={2} />
                    <CalculatorButton value={3} />
                    <CalculatorButton value={4} />
                    <CalculatorButton value={5} />
                    <CalculatorButton value={6} />
                    <CalculatorButton value={7} />
                    <CalculatorButton value={8} />
                    <CalculatorButton value={9} />
                    <CalculatorButton value={0} />

                    <CalculatorButton value="." />

                    <CalculatorButton value="+" />
                    <CalculatorButton value="=" />
                </div>
            </div>
        </CalculatorProvider>
    );
};
