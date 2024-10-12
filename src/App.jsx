import CurencyColumn from "./CurencyColumn"
import Head from "./head"
import Details from "./Details"
import React, { useEffect, useState } from "react";



function App() {
  const BASE_URL = "https://v6.exchangerate-api.com/v6/750dd410e1a164b7a105a3ee/latest/USD";
  const [curencyOptions, setCurencyOptions ] = useState([]);
  const [fromCurency, setFromCurency] = useState();
  const [toCurency, setToCurency] = useState();
  const [ammount, setAmmount] = useState(1);
  const [ammountIsFromCurency, setIsFromCurency] = useState(true);
  const [exchangeRate, setExchangeRate] = useState();

  useEffect(()=> {
    fetch(BASE_URL)
    .then(response=>response.json())
    .then(data=>{setCurencyOptions([ ...Object.keys(data.conversion_rates)])
                setFromCurency(data.base_code)
                setToCurency(Object.keys(data.conversion_rates)[1])
                setExchangeRate(data.conversion_rates[Object.keys(data.conversion_rates)[1]]);
              }
  )} , []);
  useEffect(() => {
    if (fromCurency && toCurency) {
      fetch(`${BASE_URL}?base=${fromCurency}&symbols=${toCurency}`)
        .then(response => response.json())
        .then(data => {
          setExchangeRate(data.conversion_rates[toCurency]);
        });
    }
  }, [fromCurency, toCurency]);
  let fromAmmount, toAmmount;
  if(ammountIsFromCurency){
    fromAmmount = ammount;
    toAmmount = exchangeRate * ammount;
  } else{
    toAmmount = ammount;
    fromAmmount = ammount / exchangeRate;
  }
  return(
    <>
      <div className="app">
        <div className="container">
          <Head />
          <div className="row justify-content-center mt-5">
            <CurencyColumn 
              curencyOptions = {curencyOptions}
              selectedCurency = {fromCurency}
              handleCurencyChange = {e => setFromCurency(e.target.value)}
              handleAmmountChange = {e=>{setAmmount(e.target.value); setIsFromCurency(true)}}
              ammount = {fromAmmount}
              />
            <CurencyColumn 
              curencyOptions = {curencyOptions}
              selectedCurency = {toCurency}
              handleCurencyChange = {e =>setToCurency(e.target.value)}
              handleAmmountChange = {e=>{setAmmount(e.target.value); setIsFromCurency(false)}}
              ammount = {toAmmount}
            />
          </div>
        </div>
      </div>
    </>
    
  )
}
export default App
