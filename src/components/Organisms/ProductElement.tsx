import React from 'react';
import Atoms from 'components/Atoms';
import { productType } from 'types';
import { useMediaQuery } from 'react-responsive';

function ProductElement({id, name, description, price, ImageComponent}: productType){
    const isWideScreen: boolean = useMediaQuery({
        query: "(min-width:1440px)",
    });

    const isTwoColumnScreen: boolean = useMediaQuery({
        query: "(min-width:1359px)",
    });

    const isOneColumnScreen: boolean = useMediaQuery({
        query: "(min-width:936px)",
    });

    return(
        <Atoms.Div 
            display='flex' 
            flexDirection='column' 
            // justifyContent='center'
            position='relative'
            justifySelf="center"
            width={isWideScreen ? "" : isTwoColumnScreen ? "calc(393px - 40px)" : isOneColumnScreen ? "calc(50% - 55px)" : "100%"}
            height="calc(560px - 40px)" 
            backgroundColor="#f8f8f9" 
            transition='all 0.4s ease' 
            padding="20px"
            
            >
            <Atoms.Div width="calc(100% - 40px)" mediaWidth="90%" display='inline-flex' justifyContent='center' alignContent='center' position='absolute' top="20px">
                <ImageComponent />
            </Atoms.Div>
            <Atoms.Div zIndex="1" width="calc(100% - 40px)" display='flex' flexDirection='column' position='absolute' bottom="20px">
                <Atoms.Span fontSize="40px" fontWeight="500">{name}</Atoms.Span>
                {description ? description.split('\n').map( (text, index) => {
                    return (<Atoms.Span key={index} fontWeight="400">{text}</Atoms.Span>)
                }) : null}
                <Atoms.Div marginTop="10px" display='flex' gap="20px" width="100%" alignItems='center'>
                    <Atoms.Span fontSize="25px" fontWeight="600" color="#A68717">${price}</Atoms.Span>
                    <Atoms.Button borderRadius="60px" background="#000000" width="145px" height="41px" color="#ffffff"> BUY NOW </Atoms.Button>
                </Atoms.Div>
            </Atoms.Div>
        </Atoms.Div>
    )
}

export default ProductElement;