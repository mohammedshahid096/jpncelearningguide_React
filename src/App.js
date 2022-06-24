import './App.css';
// import Navbar from './components/Navbar';
import { BrowserRouter, Route,Routes} from "react-router-dom";
import Heading from './components/Heading';
import Cplusplus from './components/Cplusplus';
import Home from './components/Home';
import Clanguage from './components/Clanguage';
import Java from './components/Java';
import Navbar from './components/Navbar';
import Htmlcss from './components/Htmlcss';
import Javascript from './components/Javascript';
import Php from './components/Php';
import Mysql from './components/Mysql';
import Python from './components/Python';
import Bootstrap from './components/Bootstrap';
import Reactjs from './components/Reactjs';



function App() {
  return (
    <div className="App">
      <div className="container-fluid pt-2">
         <Heading/>
     
        <BrowserRouter> 
        <Routes>
        <Route path="/" element = {<Home/>} />
        <Route path="/clang" element ={<Clanguage/>}/>
        <Route path='/cplusplus' element = {<Cplusplus/>} />
        <Route path='/java' element = {<Java/>} />
        <Route path='/htmlcss' element = {<Htmlcss/>} />
        <Route path='/javascript' element = {<Javascript/>} />
        <Route path='/php' element = {<Php/>} />
        <Route path='/mysql' element = {<Mysql/>} />
        <Route path='/python' element = {<Python/>} />
        <Route path='/bootstrap' element = {<Bootstrap/>} />
        <Route path='/reactjs' element = {<Reactjs/>} />
        <Route path='/*' element = { <><Navbar/> <br /> <h1>this page is on working soon it will be uploaded</h1> </>} />

        </Routes>
        </BrowserRouter>

      </div>
    </div>
  );
}

export default App;
