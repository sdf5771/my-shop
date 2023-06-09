import React from 'react';
import Atoms from 'components/Atoms';
import Molecules from 'components/Molecules';
import { subProductType } from 'types/subProductType';
import { useMediaQuery } from 'react-responsive';

function SubProductElement({id, name, description, price, color, ImageComponent}: subProductType){
    const isWideScreen: boolean = useMediaQuery({
        query: "(min-width:1440px)",
    });

    const isNotDesktop: boolean = useMediaQuery({
        query: "(min-width:1024px)",
    });

    return(
        <Atoms.Div 
            display='flex' 
            width="calc(100% - 120px)" 
            justifyContent={isWideScreen ? 'center' : "space-between"} 
            gap="100px" 
            padding="60px"
            position='relative'
            mediaPadding='20px'
            mediaWidth='calc(100% - 40px)' 
            mediaHeight="900px" 
            mediaPosition='relative'
            >
            <Atoms.Div 
                marginTop="300px" 
                display="flex" 
                flexDirection='column'
                mediaPosition='absolute'
                mediaLeft='50%'
                mediaBottom='0px'
                mediaWidth="265px"
                transform={isNotDesktop ? "" : "translateX(-50%)"}
                >
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
            <Atoms.Div 
                width="755px" 
                height="755px" 
                mediaWidth='348px' 
                mediaHeight='348px'
                mediaPosition='absolute'
                mediaLeft='50%'
                mediaBottom='330px'
                transform={isNotDesktop ? "" : "translateX(-50%)"}
                >
                <ImageComponent width="100%" height="100%" />
            </Atoms.Div>
        </Atoms.Div>
    )
}

export default SubProductElement;