import React from 'react';
import Atoms from 'components/Atoms';

function MenuList(){
    return(
        <Atoms.Div display="flex" gap="100px">
            <Atoms.Span fontSize="15px" color="#ffffff">HEADPHONES</Atoms.Span>
            <Atoms.Span fontSize="15px" color="#ffffff">EARPHONES</Atoms.Span>
            <Atoms.Span fontSize="15px" color="#ffffff">SPEAKERS</Atoms.Span>
            <Atoms.Span fontSize="15px" color="#ffffff">EXPLORE</Atoms.Span>
        </Atoms.Div>
    )
}

export default MenuList;