import React from 'react';
import Atoms from 'components/Atoms';
import { mainProductType } from 'types/mainProductType';

function MainProductElement({id, name, description, price, ImageComponent}:mainProductType){
    return(
        <Atoms.Div zIndex='5' display="flex" width="100%" justifyContent='center' alignContent='center' position="relative">
            <Atoms.Div position="absolute" left="-242px">
                <ImageComponent />
            </Atoms.Div>
            <Atoms.Div position="absolute" top="220px" right="150px" display="flex" flexDirection='column'>
                <Atoms.Span fontSize="16px" lineHeight="19px" fontWeight="500" color="#ffffff" marginBottom="20px">{name}</Atoms.Span>
                {description ? description.split('\n').map( (text, index) => {
                    return (<Atoms.Span key={index} fontSize="40px" fontWeight="700" color="#ffffff" lineHeight="43px">{text}</Atoms.Span>)
                }) : null}
                <Atoms.Div display='inline-flex' gap="20px" marginTop="30px">
                    <Atoms.Span fontSize="40px" fontWeight="300" color="#ffffff" lineHeight="49px">${price}</Atoms.Span>
                    <Atoms.Button borderRadius="60px" width="170px" height="41px" background="#ffc700" fontSize="14px" lineHeight="18px" color='#000000'>BUY NOW</Atoms.Button>
                </Atoms.Div>
                <Atoms.Span 
                    fontSize="13px" 
                    fontWeight="400" 
                    lineHeight='19.62px' 
                    color="#ffc700">$60 Apple Music gift card with purchase of select Beats products.*</Atoms.Span>
            </Atoms.Div>
        </Atoms.Div>
    )
}

export default MainProductElement;