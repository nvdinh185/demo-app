import { useState } from 'react';
import Table from './components/Table';
import MyForm from './components/MyForm';

const App = () => {
    const [state, setState] = useState([1, 2]);
    const [state2, setState2] = useState([3, 4]);
    const onClick = () => {
        setState2([]);
        state.push(5);
    }
    return (
        <>
            <h1>length = {state.length}</h1>
            <button onClick={onClick}>Set State</button>
            <Table />
            <MyForm />
        </>
    )
}

export default App;