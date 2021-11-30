import Counter from "./Counter"
import Panel from "./Panel"
import CustonProvider from "./context/Calculator-context"

const App = () => {
    return (
        <CustonProvider>
            <div>
                <Counter />
                <Panel />
            </div>
        </CustonProvider>

    )
}

export default App
