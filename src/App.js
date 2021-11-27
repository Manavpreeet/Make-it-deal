import { useEffect } from 'react';
import './App.css';
import Background from './Components/Background';
import MainBody from './Components/Main Body';
import TopBar from './Components/TopBar';
import { useDispatch } from "react-redux"
import { getItems } from './actions/item';

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getItems())
  }, [dispatch])

  return (
    <div className="page">
      <Background/>
      <TopBar/>
      <MainBody/>
    </div>
  );
}

export default App;
