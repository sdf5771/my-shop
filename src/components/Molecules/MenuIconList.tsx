import React from 'react';
import Atoms from 'components/Atoms';
import { ProfileLogo, CartLogo, SearchLogo } from 'assets/logos';

function MenuIconList(){
    return(
        <Atoms.Div display="flex" gap="40px" alignItems='center' mediaWidth='100%' mediaFlexDirection='column' mediaGap="10px">
            <SearchLogo />
            <ProfileLogo />
            <CartLogo />
        </Atoms.Div>
    )
}

export default MenuIconList;