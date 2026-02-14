import './App.css'
import { CurrencyContext } from './context/currencyContext';
import Home from './pages/Home';
import { useState } from "react";

function App() {

  const [currency, setCurrency] = useState('usd');

  return (
    <>
      <CurrencyContext.Provider value={{currency,setCurrency}}>
        <Home />
      </CurrencyContext.Provider >
    </>

  )
}

export default App;