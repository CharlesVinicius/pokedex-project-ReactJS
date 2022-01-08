import React from "react";
import styled from "styled-components";

const NavbarContainer = styled.div`
background-color: #3CB7AF;
    padding:15px;
    margin-bottom:30px;
    box-shadow: 3px 1px 2px 1px rgba(0, 0, 0, 0.2);
    `

const Title = styled.h1 `
    color: white;
`

const Navbar =()=>{
    return(
            <NavbarContainer>
                <Title>Pokedex - Banco de Dados Pokémon</Title>
            </NavbarContainer>
    )
}

export default Navbar