import React from "react";
import styled from "styled-components";

const Button = styled.button`

    border:none;
    background: 'white';
    padding:10px;
    width:100px;
    margin-right:40px;
    margin-top:50px;
    border-radius:3px;
    cursor:pointer;
    margin-bottom:50px;
`

const Pagination =({gotoNextPage, gotoPreviousPage})=>{
    return(
        <div>
            <Button onClick={gotoPreviousPage}>Anterior</Button>
            <Button onClick={gotoNextPage}>Proximo</Button>
        </div>
    )
}

export default Pagination