import './App.scss';
import {BrowserRouter as  Routes, Route, Switch } from 'react-router-dom';
import Layout from './components/Layout/Layout';

function App() {
  return (
   <>
   <Routes>
   <Switch>
    <Route path="/" element={<Layout/>}/>
    </Switch >
   </Routes>
   
   </>
  );
}

export default App;
