import React, { useState, useEffect } from 'react';

export default function Search({results, onchange, setloading}) {
    const [searchTerm, setSearchTerm] = useState('');
  
    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            console.log(searchTerm);
            setloading(true);
            if(searchTerm.length>2){
                onchange(results.filter(pokemon => pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())));
            } else if (searchTerm.length===0){
                onchange([]);
            }
            setloading(false);
        }, 1000)
    
        return () => clearTimeout(delayDebounceFn);
    }, [searchTerm])
  
    return (
      <input
        autoFocus
        type='text'
        autoComplete='off'
        className='live-search-field form-control'
        placeholder='Search pokemons here...'
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    )
  }