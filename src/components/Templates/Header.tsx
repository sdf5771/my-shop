import React from 'react';
import Atoms from 'components/Atoms';
import Molecules from 'components/Molecules';
import { Logo } from 'assets/logos';

function Header(){
    return(
        <Atoms.Div 
            zIndex="10" 
            position="fixed" 
            display="flex" 
            justifyContent='space-between'
            alignItems='center'
            width="calc(100% - 140px)" 
            height="calc(78px - 20px)" 
            backgroundColor="rgb(25, 23, 32, 0.5)" 
            padding="10px 70px">
            <Atoms.Div width="50px" height="50px">
                <Logo />
            </Atoms.Div>
            <Molecules.MenuList />
            <Molecules.MenuIconList />
        </Atoms.Div>
    )
}

export default Header;