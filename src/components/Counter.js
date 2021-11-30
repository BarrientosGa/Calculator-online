import { contexto } from "./context/Calculator-context"
import { useContext } from "react"
const Counter = () => {
    const { result } = useContext(contexto)
    return (
        <div className="counter">
            <span className="counter-number">{result}</span>
        </div>
    )
}

export default Counter
