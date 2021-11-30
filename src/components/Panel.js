import { contexto } from "./context/Calculator-context"
import { useState, useContext } from "react"
import Buttons from "./Buttons"
const Panel = () => {
    const [number1, setNumber1] = useState(" ")
    const [number2, setNumber2] = useState(" ")
    const [operator, setOperator] = useState(" ")
    const { getResult, emptyResult } = useContext(contexto)
    const handleNumber = (value, e) => {
        e.preventDefault()
        if (operator === " ") {
            setNumber1(number1 + value)
            getResult(number1 + value)


        }
        else {
            setNumber2(number2 + value)
            getResult(number2 + value)
        }

    }

    const handleOperator = (value, e) => {
        e.preventDefault()
        if (operator === " ") {
            setOperator(value)

        }
        else {
            switch (operator) {
                case "+":
                    setOperator(value)
                    getResult(Number(number1) + Number(number2))
                    setNumber2(" ")
                    setNumber1(Number(number1) + Number(number2))

                    break;
                case "-":
                    setOperator(value)
                    getResult(Number(number1) - Number(number2))
                    setNumber2(" ")
                    setNumber1(Number(number1) - Number(number2))
                    break;
                case "x":
                    setOperator(value)
                    getResult(Number(number1) * Number(number2))
                    setNumber2(" ")
                    setNumber1(Number(number1) * Number(number2))
                    break;
                case "÷":
                    setOperator(value)
                    getResult(Number(number1) / Number(number2))
                    setNumber2(" ")
                    setNumber1(Number(number1) / Number(number2))
                    break;
                case "%":
                    setOperator(value)
                    getResult(parseInt(number1) / 100)
                    setNumber2(" ")
                    setNumber1(parseInt(number1) / 100)
                    break;
                default:
                    break;
            }

        }

    }

    const handleResult = (e) => {
        e.preventDefault()
        switch (operator) {
            case "+":
                getResult((Number(number1) + Number(number2)))
                break;
            case "-":
                getResult((Number(number1) - Number(number2)))
                break;
            case "x":
                getResult((Number(number1) * Number(number2)))
                break;
            case "÷":
                getResult((Number(number1) / Number(number2)))
                break;
            default:
                break;
        }

    }
    const handleClear = () => {

        setNumber1(" ")
        setNumber2(" ")
        setOperator(" ")
        emptyResult()
    }
    const handlePercentage = (e) => {
        e.preventDefault()
        if (number1 !== " ") {
            setOperator("%")
            getResult(parseInt(number1) / 100)
        }

    }
    const handleNegative = (e) => {
        e.preventDefault()
        setNumber1(number1 + "-")

    }
    return (
        <Buttons handleNumber={handleNumber} handleOperator={handleOperator} handleResult={handleResult}
            handleClear={handleClear} handlePercentage={handlePercentage} handleNegative={handleNegative} />

    )
}

export default Panel
