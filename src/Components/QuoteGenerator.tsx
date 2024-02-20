import React from "react";
import styled from "styled-components"
import stars from '../Assets/Stars.gif' // stars este un placeholder pentru linkul catre imaginea din folderul assets
import '../CSS/QuoteGenerator.css'

interface QuoteObject
{
content:string;
author:string;

}

interface QuoteProps
{
fetchQuote:()=>void;
quote?:QuoteObject|null;// This way, quote can either be a QuoteObject or null. Variabila quote poate sa fie astfel o variabila de tip QuoteObject sau de tip null
}// Update the QuoteProps interface to make quote optional. Am verficat astfel tipul variabilei quote pentru a nu intampina un type error.
// Inainte ca utilizatorul sa efectueze apelul API aceasta variabila va fi de tipul null. In urma apelului API aceasta variabila devine o variabila de tip obiect/ de tip QuoteObject
const StyledTitle = styled.h1`
color:#CCCCCC;
font-family: Roboto;
font-size:2.532vw;
`;
const StyledButton=styled.button`
background: linear-gradient(to right bottom, #4776E6, #8E54E9);
width:12.658vw;
height:3.165vw;
font-size:1.266vw;
border-radius:0.949vw;
color:#edefee;
cursor:pointer;
font-weight:bold;
transition:transform 0.4s ease ;
&:hover{
transform:scale(1.1);
}
`
const StyledQuoteDiv=styled.div`
border-radius:1.266vw;
width:37.975vw;
min-height:12.658vw;
margin-top:1.582vw;
padding-top:2.532vw;
position: relative;
background-color: #262626; /* Dark background color */
overflow: hidden;
&::before{
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(${stars}); /* Replace with your star image */
  
}
`;

const StyledAuthor=styled.p`
position:relative;
margin-top: 1.013vw;
font-weight:500;
font-size:1.519vw;
color: white; /* White text color for visibility */
text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8); /* Slight shadow effect */
font-family: Arial, sans-serif;
z-index:2;
`;

const StyledQuote=styled.h2`

position:relative;
bottom:0.475vw;
font-size:1.519vw;
color: white; /* White text color for visibility */
text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8); /* Slight shadow effect */
font-family: Arial, sans-serif;
`

const QuoteGenerator:React.FC<QuoteProps>=({fetchQuote,quote})=>{
  
const displayQuote=()=>{
  fetchQuote()
}
    return(
    <div className="Main-div">
     <StyledTitle>Quote Generator </StyledTitle>
  
  {quote?
  <StyledQuoteDiv id='quoteDiv'>
    <StyledQuote id='quote'>{quote.content}</StyledQuote>
    <StyledAuthor >{quote.author}</StyledAuthor>
  </StyledQuoteDiv>
  :null}
      
      <StyledButton onClick={displayQuote}>Generate</StyledButton>
    </div>

    )
} 
export default QuoteGenerator