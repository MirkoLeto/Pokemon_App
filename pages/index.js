import useFetchPokemon from '../useRequest';
import Pokemon from '../components/Pokemon';
import Search from '../components/Search'
import Spinner from '../components/Spinner';
import 'bootstrap/dist/css/bootstrap.css';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function IndexPage() {
  const [loading, setLoading] = useState(false);
  const [resultFilter, setResultFilter] = useState([]);
  const { result, error } = useFetchPokemon(null, 10000);
  const [myPokemon, setMyPokemon] = useState([]);
  const [showAlert, setShowAlert] = useState(false)
 
  if (error) return <h1>Something went wrong!</h1>
  if (!result) return <h1>Loading...</h1>

  function detailsPokemon (result) {
    setShowAlert(true);
    const res = myPokemon.filter(pokemon => pokemon.id == result.id);
    if (res.length < 1){
      setMyPokemon ((prevState) => [...prevState, result]);
    }
  }

  let alertClass = showAlert ? 'alert alert-success' : 'modal-alert';
  let alertStyles = showAlert ? {} : { opacity: 0, visibility: 'hidden', pointerEvents: 'none' };
  
 
  return (
    <main className='App'>
      <div className='row'>
      <div
      className={alertClass}
      style={alertStyles}
      onAnimationEnd={() => setShowAlert(false)}
      role="alert">
        Pokemon aggiunto al tuo Deck
      </div>
      </div>
      <div className='row mb-4'>
        <div className='col-lg-6 col-md-6 col-sm-12 w-100'>
          <h1>Search pokemons</h1>
        </div>
        <div className='col-lg-6 col-md-6 col-sm-12 w-100'>
          <Link
          className='btn btn-primary'
          href={{
            pathname:'/deck',
            query: {
              myPokemon: JSON.stringify(myPokemon)
            } }}>
            My Deck
          </Link>
        </div>
      </div>
      <Search results={result.results} onchange={setResultFilter} setloading={setLoading}></Search>

      {loading && <Spinner />}

      {resultFilter.length > 0 &&
        <div>
          {resultFilter.map((pokemon) => (
            <Pokemon pokemon={pokemon} detailsPokemon={detailsPokemon} key={pokemon.name}/>
          ))}
        </div>
      }
      {resultFilter.length < 1 && <div><h1>No results</h1></div>}
    </main>
  )
}