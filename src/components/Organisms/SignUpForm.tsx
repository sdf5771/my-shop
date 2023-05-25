import React, {useState} from 'react';
import Atoms from 'components/Atoms';

function SignUpForm(){
    const [inputValue, setInputValue] = useState('')

    const inputOnChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    }

    return(
        <Atoms.Div display="inline-flex" justifyContent='center' width="calc(100% - 120px)" padding="30px 60px 40px 60px" height="335px">
            <Atoms.Div display="flex" justifyContent='center' alignItems='center' flexDirection='column' gap="40px" backgroundColor="#f8f8f9" width="1253px" height="100%">
                <Atoms.Div display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
                    <Atoms.Span fontSize="50px" lineHeight="55px" fontWeight="700" color="#2B2835">Hear it first</Atoms.Span>
                    <Atoms.Span fontSize="14px" lineHeight="18px" fontWeight="300" color="#030303">Get updates on product drops, collaborations and all things Beats.</Atoms.Span>
                </Atoms.Div>
                <Atoms.Div display='flex' flexDirection='column' width="507px" minWidth="298px" gap="10px" justifyContent='center' alignItems='center'>
                    <Atoms.Input 
                        placeholder='Enter your email' 
                        padding="10px 20px" 
                        backgroundColor="#f8f8f9" 
                        height="36px" 
                        borderRadius="40px"
                        fontSize="14px"
                        maxLength={50}
                        onChange={inputOnChangeHandler}
                        value={inputValue}
                         />
                    <Atoms.Button width="100%" height="41px" borderRadius="40px" background="#FFC700" color="#000000">SIGN UP</Atoms.Button>
                </Atoms.Div>
            </Atoms.Div>
        </Atoms.Div>
    )
}

export default SignUpForm;