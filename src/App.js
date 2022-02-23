import Login from "./pages/Login";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import GlobalStyle from "./styles/GlobalStyle";
import Cadastro from "./pages/Cadastro";
import Home from './pages/Home'

function App() {
  return (
    
    <>
      <GlobalStyle/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/cadastro" element={<Cadastro/>}/>
          <Route path="/home" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </>
    
      
  );
}

export default App;
