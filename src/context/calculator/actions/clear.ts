import {Dispatch} from "react"
import {CalculatorAction} from "../calculatorReducer"

export const clear = (dispatch: Dispatch<CalculatorAction>) => () => {
    dispatch({
        type: "CLEAR",
    })
}
