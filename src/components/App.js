import Counter from "./Counter"
import Panel from "./Panel"
import CustonProvider from "./context/Calculator-context"

const App = () => {
    return (
        <CustonProvider>
                <Counter />
                <Panel />
        </CustonProvider>

    )
}

export default App
