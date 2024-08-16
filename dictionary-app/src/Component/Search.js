 import React, { useState } from 'react'
 
 const Search = () => {
    const [search, setSearch] = useState();
    const [data, setData] = useState();
     
    const handleInput = (event) =>{
        console.log(event.target.value);
        setSearch(event.target.value)
    }

    const myFun = async() =>{
        const get = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${search}`);
        const jsonData = await get.json();
        console.log(jsonData);
        setData(jsonData[0])
         
    }
   return (
     <>
        <div className='app'>
            <h1>Dictionary App</h1>
            <div className='container'>
                <div className='searchBar'>
                    <input type='text' placeholder="Search Word's" onChange={handleInput}/>
                    <button onClick={myFun}>Search</button>
                </div>
                <div className='datas'>
                 {
                    data ? 
                    <div className='datas'>
                     <h2>Word : {data.word}</h2>
                     <p>Part Of Speech : {data.meanings[0].partOfSpeech}</p>
                     <p>Definition : {data.meanings[0].definitions[0].definition }</p>
                     <p>Synoyms : {data.meanings[0].synonyms[0]                     }</p>
                     <p>Example : {data.meanings[0].definitions[0].example}</p>
                     <button onClick={()=>window.open(data.sourceUrls[0],"_blank")}>Read More</button>
                                                       
                    </div>
                    : ""
                 }
                </div>
            </div>
        </div>
     </>
   )
 }
 
 export default Search