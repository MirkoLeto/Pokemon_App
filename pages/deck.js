import useFetchPokemon from '../useRequest';
import Pokemon from '../components/Pokemon';
import { useState } from 'react';
import { useRouter } from 'next/router'
import 'bootstrap/dist/css/bootstrap.css';
import Link from 'next/link';


function Deck () {
    const router = useRouter();
    const {query} = router;
    const {myPokemon} = query
    const arrayPokemon = JSON.parse(myPokemon)

    return <>
    <div className='row mt-4'>
        <div className='col-lg-10 col-md-6 col-sm-12 text-center'>
          <h1>My Deck</h1>
        </div>
        <div className='col-lg-2 col-md-6 col-sm-12'>
          <Link
          className='btn btn-primary'
          href="/">
            Scegli Pokemon
          </Link>
        </div>
    </div>

        <div className='container mt-5'>
            <div className='row'>
                <div className='d-flex flex-wrap container_pokemon_deck'>
                    {arrayPokemon.map((item) => (
                        <Pokemon pokemon={item} key={item.name}></Pokemon>
                    ))}
                </div>
            </div>
        </div>
    </>
}

export default Deck