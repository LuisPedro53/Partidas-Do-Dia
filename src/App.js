import React,{useEffect,useState} from 'react';
import './App.css';
import axios from 'axios';
import Resultados from "./components/Resultados"


function App() {
  const [results,setResults] = useState([])
  const url = 'https://api-football-v1.p.rapidapi.com/v3/fixtures'
  const hoje = new Date()
  const dia = hoje.getDate().toString().padStart(2,'0',1)
  const mes = String(hoje.getMonth()+1)
  const ano = hoje.getFullYear()
  const dataAtual = `${ano}-${mes}-${dia}`
  useEffect(()=>{
    axios.get(url, {
      params: {date: dataAtual, league:'1',season: '2022'},
      headers: {
        'X-RapidAPI-Key': '6c0427e2cfmsh6116cf355c3f667p10d3cfjsnd88663f5952f',
        'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
      }
    })
    .then((res) => {
      //console.log(res.data.response)
      setResults(res.data.response)
    })
    .catch((error) => {
      console.error(error)
    })

  

  },[])
  console.log(results);
  return (
    <div className="App">
      <header>
       
      </header>
      <main>
        <Resultados results={results}/>

      </main>
      
      
    </div>

  );
}

export default App;
