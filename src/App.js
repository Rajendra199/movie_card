import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Add from './component/Add';
import Header from './component/Header';
import Watched from './component/Watched';
import Watchlist from './component/Watchlist';
import "./lib/font-awesome/css/all.min.css"
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
    <BrowserRouter>
      <Header/>

          <Routes>
            <Route path="/" element={<Watchlist />} />
            <Route path = "/watched" element ={<Watched />}/>
            <Route path = "/add" element ={<Add />}/>
            {/* <Route path="/add">
              <Add />
            </Route>
            <Route path="/watched">
              <Watched />
            </Route> */}
          </Routes>
    </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;
