import React from 'react';
import Atoms from 'components/Atoms';

type TFindColor = {
    colorList: string[]
}

function FindColor({colorList}:TFindColor){
    return(
        <Atoms.Div display='flex' flexDirection='column' width="370px">
            <Atoms.Span fontSize="40px" lineHeight="55px" fontWeight="350" color="#2B2835">Available Colors</Atoms.Span>
            <Atoms.Div position='relative'>
                <Atoms.Span fontSize="16px" lineHeight="19px" color="#2B2835" marginBottom="10px">Find your Color</Atoms.Span>
                <Atoms.Span position='absolute' top="-120px" right="150px" fontSize="36px" lineHeight="19px" color="#2B2835" marginBottom="10px">+</Atoms.Span>
            </Atoms.Div>
            <Atoms.Div display='flex' gap="10px" marginTop="10px">
                {colorList.map((color, index) => {
                    return <Atoms.Div key={index} width="37px" height="37px" borderRadius="30px" backgroundColor={color} boxShadow="1px 5px 10px rgb(0,0,0, 0.3)"></Atoms.Div>
                })}
            </Atoms.Div>
        </Atoms.Div>
    )
}

export default FindColor;