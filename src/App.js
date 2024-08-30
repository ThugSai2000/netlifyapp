import logo from './logo.svg';
import './App.css';
import LoginPage from './Pages/LoginPage';
import AppLayout from './Layout/AppLayout';
import UseStateHook from './Components/HooksClass.jsx/UseStateHook';
import UseEffectHook from './Components/HooksClass.jsx/UseEffectHook';
import UseRef from './Components/HooksClass.jsx/UseRef';
import CombinedHooks from './Components/HooksClass.jsx/CombinedHooks';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import BuildPage from './Pages/BuildPage';
import IntegrationPage from './Pages/IntegrationPage';
import DomainPage from './Pages/DomainPage';


function App() {
  return (
    <div className="App" >
      
      <Router>
        <Routes>
          {/* intial routes */}
          <Route path='/' element={<div>Welcome</div>}/>
          <Route path='/login' element={<LoginPage/>}/>
          
          <Route path='/combinedhooks' element={<CombinedHooks/>}/>
{/* testing */}
         
{/* app */}
         <Route path='/app' element={<AppLayout/>}>
              <Route index element={<Dashboard/>} />
              <Route path='build' element={<BuildPage/>} />
              <Route path='integration' element={<IntegrationPage/>} />
              <Route path='domains' element={<DomainPage/>} />
         </Route>
        </Routes>
      </Router>






      {/* Routing */}
      {/* <LoginPage/> */}
      {/* <AppLayout/> */}
      {/* <UseStateHook/> */}
      {/* <UseEffectHook/> */}
      {/* <UseRef/> */}
      {/* <CombinedHooks/> */}
    </div>
  );
}

export default App;
