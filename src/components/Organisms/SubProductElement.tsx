import React from 'react';
import Atoms from 'components/Atoms';
import Molecules from 'components/Molecules';
import { subProductType } from 'types/subProductType';

function SubProductElement({id, name, description, price, color, ImageComponent}: subProductType){
    return(
        <Atoms.Div display='flex' width="calc(100% - 120px)" justifyContent='center' gap="100px" padding="60px">
            <Atoms.Div marginTop="300px" display="flex" flexDirection='column'>
                <Atoms.Span fontSize="16px" lineHeight="19px" fontWeight="300" color="#2B2835">{name}</Atoms.Span>
                <Atoms.Span fontSize="50px" lineHeight="55px" fontWeight="700" color="#2B2835">{description}</Atoms.Span>
                <Molecules.FindColor colorList={color}/>
                <Atoms.Div display='inline-flex' gap="20px" marginTop="30px">
                    <Atoms.Span fontSize="40px" fontWeight="300" color="#000000" lineHeight="49px">${price}</Atoms.Span>
                    <Atoms.Button borderRadius="60px" width="170px" height="41px" background="#000000" fontSize="14px" lineHeight="18px" color='#ffffff'>BUY NOW</Atoms.Button>
                </Atoms.Div>
                <Atoms.Span 
                    fontSize="13px" lineHeight="19.62px" fontWeight="350" color="#000000">$60 Apple Music gift card with purchase of select Beats products.*</Atoms.Span>
            </Atoms.Div>
            <Atoms.Div width="755px" height="755px" mediaWidth='348px' mediaHeight='348px'>
                <ImageComponent width="inherit" height="inherit" />
            </Atoms.Div>
        </Atoms.Div>
    )
}

export default SubProductElement;