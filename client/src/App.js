import './App.css';
import { Home } from './components/Home/Home';
import Nav from './components/Nav/Nav';
import { Route,Routes } from "react-router-dom";
import LandingPage from './components/LandingPage/LandingPage';
import CardDetails from './components/CardDetails/CardDetails';
import { Form } from './components/Form/Form';
import NotFound from './components/NotFound/NotFound';
function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route exact path='/' element={<LandingPage/>}/>
        <Route exact path='/home' element={<Home/>}/>
        <Route exact path='/detail/:id' element={<CardDetails/>}/>
        <Route exact path='/form' element={<Form/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
