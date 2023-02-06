// Pokemon.js
import { useState } from 'react';
import React from 'react';
import useFetchPokemon from '../useRequest';
import Image from 'next/image'
 
export default function Pokemon({ pokemon, detailsPokemon }) {
  const { name } = pokemon
  const { result, error } = useFetchPokemon(name);
 
  if (error) return <h1>Something went wrong!</h1>
  if (!result) return <h1>Loading...</h1>

  function addPokemon () {
    detailsPokemon(result);
  }
 
  return (
    <div className='Card'>
      <span className='Card--id'>#{result.id}</span>
      <img
        className='Card--image'
        src={result.sprites.front_default}
        alt={name}
      />
      <h1 className='Card--name'>{name}</h1>
      <p className='Card--details'>
        base_exp: {result.base_experience}
      </p>
      <span className='Card--details'>
        {result.abilities.map((poke) => poke.ability.name).join(', ')}
      </span>
      <span className='Card--details'>
        {result.types.map((poke) => poke.type.name).join(', ')}
      </span>
      {detailsPokemon &&
        <div className="Btn_wrap">
          <button className="Btn-card" onClick={addPokemon}>Add to deck</button>
        </div>
      }
    </div>
  )
}