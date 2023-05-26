import React from 'react';
import Atoms from 'components/Atoms';
import { ProfileLogo, CartLogo, SearchLogo } from 'assets/logos';
import { useMediaQuery } from 'react-responsive';

function MenuIconList(){
    const isNotDesktop: boolean = useMediaQuery({
        query: "(min-width:1024px)",
    });

    return(
        <Atoms.Div display="flex" gap="40px" justifyContent={isNotDesktop ? "" : "space-between"} marginTop={isNotDesktop ? "" : "20px"} alignItems='center' mediaWidth='100%' mediaGap="10px">
            <SearchLogo />
            <ProfileLogo />
            <CartLogo />
        </Atoms.Div>
    )
}

export default MenuIconList;