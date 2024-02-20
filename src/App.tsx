import React,{useState} from 'react';
import QuoteGenerator from './Components/QuoteGenerator';
import './App.css';

function App() {
  const[quote,setQuote]=useState(null)

 
  const fetchQuote = async ()=>{
    try{
      
    const response = await fetch('https://api.quotable.io/random')
    const data = await response.json() // Aceasta metoda este folosita pentru a converti un obiect JSON intr-un obiect TypeScript
    console.log(data)
    setQuote(data) 
    
    }
    catch(err){
    console.log('Error in obtaining data', err)
    }
  }
  return (
    <div className="App">
    <QuoteGenerator fetchQuote={fetchQuote} quote={quote} />
    </div>
  );
}

export default App;
