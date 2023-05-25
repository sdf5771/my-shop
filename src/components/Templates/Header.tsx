import React from 'react';
import Atoms from 'components/Atoms';
import Molecules from 'components/Molecules';
import { Logo } from 'assets/logos';
import { HamburgerIcon } from 'assets/logos';

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
            padding="10px 70px"
            
            mediaFlexDirection='column'
            mediaPosition='absolute'
            mediaBackgroundColor='unset'
            mediaPadding='10px 20px'
            mediaWidth='calc(100% - 40px)'
            mediaAlignItems='flex-start'
            mediaHeight='calc(50px - 20px)'
            >
            <Atoms.Div 
                width="50px" height="50px" 
                minWidth="50px" minHeight="50px" 
                mediaWidth='27px' mediaHeight='27px'
                mediaMinWidth='27px' mediaMinHeight='27px'
                >
                <Logo width="inherit" height="inherit"/>
            </Atoms.Div>
            <Molecules.MenuList />
            <Molecules.MenuIconList />
            <Atoms.Div display="none" mediaDisplay='block' mediaPosition='absolute' mediaTop='10px' mediaRight='30px'>
                <HamburgerIcon />
            </Atoms.Div>
        </Atoms.Div>
    )
}

export default Header;