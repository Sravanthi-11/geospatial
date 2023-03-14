import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Options from './components/pages/Options';
import Forestoptions from './components/pages/Forestoptions';
import Policyoptions from './components/pages/Policyoptions';
import Search from './components/pages/Search';
import ForestModel from './components/pages/ForestModel';
// import ForestPredict from './components/pages/ForestPredict';
import Growth from './components/pages/Growth';



function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/options' element={<Options/>} />
          <Route path='/forestoptions/*' element={<Forestoptions/>} />
          {/* <Route path='/select/*' element={<Heatwave/>} /> */}
          <Route path= '/policyoptions/*' element={<Policyoptions/>} />
          <Route path= '/search/*' element={<Search/>} />
          <Route path= '/forestmodel/*' element={<ForestModel/>} />
          <Route path= '/growth/*' element={<Growth/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
