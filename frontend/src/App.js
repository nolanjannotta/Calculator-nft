import {useState} from "react"
import './App.css';
import Body from './components/Body';
import { Web3ReactProvider } from '@web3-react/core';
import {Web3Provider} from "@ethersproject/providers"
import NavBar from './components/NavBar';
import Supply from './components/Supply';
import Calculators from './components/Calculators';
import Footer from "./components/Footer.js"

const getLibrary = (provider) => {
  return new Web3Provider(provider);
}


function App() {
  const [frontPage, setFrontPage] = useState(true)


  return (
      <div>

        <Web3ReactProvider getLibrary={getLibrary}>
          <NavBar frontPage={frontPage} setFrontPage={setFrontPage}></NavBar>

          {frontPage ? 
          <>          
            <Supply></Supply>
            <Body></Body>
          </>
          : 
          <>
            <Calculators></Calculators>
          </> 
          }
            
        
        </Web3ReactProvider>
        <Footer></Footer> 
        </div>

  );
}

export default App;