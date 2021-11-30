import { createContext } from "react";
import { useState } from "react";
export const contexto = createContext();

export const { Provider } = contexto;

export const CustonProvider = ({ children }) => {
    const [result, setResult] = useState(0);

    const getResult = (valor) => {
            setResult(valor)
    }

    const emptyResult = () => {
        setResult(0);
    }
    const valorDelContexto = {

        getResult: getResult,
        result: result,
        emptyResult: emptyResult
    }

    return (
        <Provider value={valorDelContexto}>
            {children}
        </Provider>
    )

}

export default CustonProvider;
