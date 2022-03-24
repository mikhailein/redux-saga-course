import { useDispatch, useSelector } from "react-redux";

function App() {
  const store = useSelector(store => store)
  const dispatch=useDispatch()

  console.log(store);
  return (
    <div className="App">
      redux-saga tutorial
      
      <button onClick={() => dispatch({ type:'LOAD_DATA'})}>Clicker</button>
    </div>
  );
}

export default App;
