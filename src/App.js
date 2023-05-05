import  imagenRickyMorty from './img/rick-morty.png';
import './App.css';
import { useState } from "react";
import Characters from './Components/characters';


function App() 
  {
    const [characters, setCharacters] = useState(null);
  
    const reqApi = async () => {
      const api = await fetch("https://rickandmortyapi.com/api/character");
  
      const charactersApi = await api.json();
      setCharacters(charactersApi.results);
    };
   //console.log(characters);
  



  return (
    <div className="App">
      <header className="App-header">
        <h1 className='title'>Rick & Morty</h1>
        {characters ? (
          <Characters characters={characters} setCharacters={setCharacters} />
        ) : (
          <>
             <img src={imagenRickyMorty} alt="Ricky & Morty" className='img-home'/>
            <button onClick={reqApi} className="btn-search">
              Buscar personajes
            </button>
          </>
        )}
       
        
      </header>
    </div>
  );
}

export default App;
