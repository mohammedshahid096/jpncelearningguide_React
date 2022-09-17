import './App.css';
import { BrowserRouter, Navigate, Route,Routes} from "react-router-dom";
import Heading from './components/Heading';
import Cplusplus from './programing/Cplusplus';
import Home from './programing/Home';
import Clanguage from './programing/Clanguage';
import Java from './programing/Java';
import Htmlcss from './programing/Htmlcss';
import Javascript from './programing/Javascript';
import Php from './programing/Php';
import Mysql from './programing/Mysql';
import Python from './programing/Python';
import Bootstrap from './programing/Bootstrap';
import Reactjs from './programing/Reactjs';
import Programming from './components/Programming';
import Navbar2 from './components/Navbar2';
import Innavbar from './interview/Innavbar';
import Searchsubject from './Academics/Searchsubject';
import Allalgorithms from './Algorithms/Allalgorithms';



function App() {
  return (
    <div className="App">
      <div className="container-fluid pt-2">
         <Heading/>
        <BrowserRouter> 
         <Navbar2/>
        <Routes>
        <Route path="/" element = {<Navigate to="/programming/home" />} />
        {/* programming block routes */}
        <Route path="/programming/" element = {<Programming/>} >
          <Route index element={<Navigate to="/programming/home" />}/>
        <Route path="home" element = {<Home/>} />
        <Route path="clang" element ={<Clanguage/>}/>
        <Route path='cplusplus' element = {<Cplusplus/>} />
        <Route path='java' element = {<Java/>} />
        <Route path='htmlcss' element = {<Htmlcss/>} />
        <Route path='javascript' element = {<Javascript/>} />
        <Route path='php' element = {<Php/>} />
        <Route path='mysql' element = {<Mysql/>} />
        <Route path='python' element = {<Python/>} />
        <Route path='bootstrap' element = {<Bootstrap/>} />
        <Route path='reactjs' element = {<Reactjs/>} />
        <Route path='temp' element={<Navbar2/>} />
        </Route>

        <Route path='/interview' element={<Innavbar/>} />
        <Route path="academic" element ={<Searchsubject/>}/>
        <Route path="algorithms" element ={<Allalgorithms/>}/>

        <Route path='/*' element = {<center><h1>this page is on working soon it will be upload</h1></center>} />
        </Routes>
        

        </BrowserRouter>

      </div>
    </div>
  );
}

export default App;
