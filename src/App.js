import './App.css';
// import Navbar from './components/Navbar';
import { BrowserRouter, Route,Routes} from "react-router-dom";
import Heading from './components/Heading';
import Cplusplus from './components/Cplusplus';
import Home from './components/Home';
import Clanguage from './components/Clanguage';
import Java from './components/Java';
import Navbar from './components/Navbar';



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
        <Route path='/*' element = { <><Navbar/> <br /> <h1>this page is on working soon it will be uploaded</h1> </>} />

        </Routes>
        </BrowserRouter>

      </div>
    </div>
  );
}

export default App;
