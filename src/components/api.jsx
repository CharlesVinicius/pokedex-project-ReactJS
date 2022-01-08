import React, { useState, useEffect } from 'react';
import PokemonList from './PokemonList';
import Pagination from './Pagination';

const ReactApi =()=>{
    const [pokemon, setPokemon] = useState([])
    const [loading, setLoading] = useState(true)
    const [currentUrl, setCurrentUrl] = useState ('https://pokeapi.co/api/v2/pokemon')
    const [nextPage, setNextPage] = useState()
    const [previousPage, setPreviousPage] = useState()


    useEffect(()=>{
        fetch(currentUrl).then(response=>{
        response.json().then(data=>{
            setPokemon(data.results)
            console.log(data)
            setLoading(false)
            setNextPage(data.next)
            setPreviousPage(data.previous)
           
            })
        })
        
        .catch(err=>console.error('Ops, erro na requisição', err))

    },[currentUrl])


    // Paginação
    
    function gotoNextPage(){
        setCurrentUrl(nextPage)
    }

    function gotoPreviousPage(){
        setCurrentUrl(previousPage)
    }

    return(
        <div>
            {loading ? <h1>Carregando...</h1> :(
                <div>
                    <PokemonList pokemon={pokemon}/>

                    <Pagination gotoNextPage={gotoNextPage}
                    gotoPreviousPage={gotoPreviousPage}/>
                </div>
            )}
        </div>
            
    )
}

export default ReactApi