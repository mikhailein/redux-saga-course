import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

function App() {
  const store = useSelector(store => store)
  const dispatch=useDispatch()

  console.log(store);
  return (
    <div className="App">
    <Link to='/blog'>Go to Blog</Link>
    </div>
  );
}

export default App;
