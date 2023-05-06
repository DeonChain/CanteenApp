
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Nav from './Nav';
import Home from './Home';
import Footer from './Footer';
import Feedback from './Feedback';
import ProfileN from './ProfileN';
import Wallet from './Wallet';
import ContractInteraction from './ContractInteraction';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}> </Route>
        <Route path="/feedback" element={<Feedback/>}> </Route>
        <Route path="/profile" element={<ProfileN/>}> </Route>
        <Route path="/docs" element={<h1>This is Documentation Page</h1>}> </Route>
      </Routes>
      <ContractInteraction/>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
