import './App.css';
import ATM from './components/ATM';
import { useSelector, useDispatch } from 'react-redux';
import {toggleATM} from "./redux/atmSlice"



function App() {
 const {showATM} = useSelector((state) => state.atm)
 const dispatch = useDispatch()

  return (
    <div className="App">
      <header className="App-header">
        <h1>Atm with redux</h1>
        <button onClick={() => {dispatch(toggleATM())}}>{showATM ? "Close ATM" : "Open ATM"}</button>
        {showATM && <ATM/>}
      </header>
    </div>
  );
}

export default App;
