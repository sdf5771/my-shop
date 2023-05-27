import React from 'react';
import Atoms from 'components/Atoms';
import { mainProductType } from 'types/mainProductType';
import { useMediaQuery } from 'react-responsive';

function MainProductElement({id, name, description, price, ImageComponent}:mainProductType){
    const isWideScreen: boolean = useMediaQuery({
        query: "(min-width:1440px)",
    });

    const isNotDesktop: boolean = useMediaQuery({
        query: "(min-width:1024px)",
    });

    return(
        <Atoms.Div zIndex='5' display="flex" width="100%" justifyContent='center' alignContent='center'>
            <Atoms.Div width="1200px" position="relative">
                <Atoms.Div 
                    position="absolute" 
                    width="1078px" 
                    height="766px" 
                    mediaWidth='424px' 
                    mediaHeight='300px' 
                    left="-265px" 
                    mediaLeft="42%" 
                    transform={isNotDesktop ? "" : "translateX(-50%)"}>
                    <ImageComponent width="100%" height="100%" />
                </Atoms.Div>
                <Atoms.Div position="absolute" top={isNotDesktop ? "220px" : "300px"} width={isNotDesktop ? "428px" : "300px"} right={isNotDesktop ? "70px" : "50%"} transform={isNotDesktop ? "" : "translateX(50%)"} display="flex" flexDirection='column'>
                        <Atoms.Span fontSize="16px" lineHeight="19px" fontWeight="500" color={isNotDesktop ? "#ffffff" : "#000000"} marginBottom="20px">{name}</Atoms.Span>
                        {description ? description.split('\n').map( (text, index) => {
                            return (<Atoms.Span key={index} fontSize="40px" fontWeight="700" color={isNotDesktop ? "#ffffff" : "#000000"} lineHeight="43px">{text}</Atoms.Span>)
                        }) : null}
                        <Atoms.Div display='inline-flex' gap="20px" marginTop="30px">
                            <Atoms.Span fontSize="40px" fontWeight="300" color={isNotDesktop ? "#ffffff" : "#000000"} lineHeight="49px">${price}</Atoms.Span>
                            <Atoms.Button borderRadius="60px" width="170px" height="41px" background="#ffc700" fontSize="14px" lineHeight="18px" color='#000000'>BUY NOW</Atoms.Button>
                        </Atoms.Div>
                        <Atoms.Span 
                            fontSize="13px" 
                            fontWeight="400" 
                            lineHeight='19.62px' 
                            color={isNotDesktop ? "#ffc700" : "#000000"}>$60 Apple Music gift card with purchase of select Beats products.*</Atoms.Span>
                    </Atoms.Div>
            </Atoms.Div>
        </Atoms.Div>
    )
}

export default MainProductElement;