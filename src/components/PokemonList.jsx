import React from "react";
import styled from 'styled-components';

const Article = styled.article`
    background: #F0F0F0;
    width: 240px;
    padding:40px;
    margin-top:10px;
    border-radius:20px;
    display:flex;
    display:inline-block;
    align-items:center;
    margin:5px;
    box-shadow: 3px 2px 2px 2px rgba(0, 0, 0, 0.3);
`;

const PokemonList =({pokemon})=>{
    return(
            <div>
                {pokemon.map((pokemons, index)=>(

                    <Article key={index}>      
                            <p>{pokemons.name}</p>
                    </Article>
                ))}

            </div>
    )
}

export default PokemonList