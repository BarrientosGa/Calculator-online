const Buttons = ({ handleNumber, handleOperator, handleResult, handleClear, handlePercentage, handleNegative }) => {
    return (
        <div className="calculator-grid">
            <button onClick={handleClear}>AC</button>
            <button onClick={handleNegative}>+/-</button>
            <button onClick={handlePercentage}>%</button>
            <button onClick={(e) => { handleOperator("÷", e) }} className="operator">÷</button>
            <button onClick={(e) => { handleNumber("7", e) }}>7</button>
            <button onClick={(e) => { handleNumber("8", e) }}>8</button>
            <button onClick={(e) => { handleNumber("9", e) }}>9</button>
            <button onClick={(e) => { handleOperator("x", e) }} className="operator">x</button>
            <button onClick={(e) => { handleNumber("4", e) }}>4</button>
            <button onClick={(e) => { handleNumber("5", e) }}>5</button>
            <button onClick={(e) => { handleNumber("6", e) }}>6</button>
            <button onClick={(e) => { handleOperator("-", e) }} className="operator">-</button>
            <button onClick={(e) => { handleNumber("1", e) }}>1</button>
            <button onClick={(e) => { handleNumber("2", e) }}>2</button>
            <button onClick={(e) => { handleNumber("3", e) }}>3</button>
            <button onClick={(e) => { handleOperator("+", e) }} className="operator">+</button>
            <button onClick={(e) => { handleNumber("0", e) }} className="span-two">0</button>
            <button onClick={(e) => { handleNumber(".", e) }}>.</button>
            <button onClick={handleResult} className="operator">=</button>
        </div>
    )
}

export default Buttons
