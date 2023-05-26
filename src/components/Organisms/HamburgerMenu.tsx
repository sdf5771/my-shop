import React from 'react';
import Atoms from 'components/Atoms';
import Molecules from 'components/Molecules';
import { useRecoilState } from 'recoil';
import hamBurgerMenuState from 'state/hamBurgerMenuState';

function HamburgerMenu(){   
    const [hamBurgerState, setHamBurgerState] = useRecoilState(hamBurgerMenuState);

    return(
        <Atoms.Div 
            zIndex="20" 
            position="fixed" 
            top="0" 
            left="0" 
            width="100vw" 
            height="100vh" 
            backgroundColor="rgb(0, 0, 0, 0.5)"
            onClick={(event:React.MouseEvent<HTMLDivElement>) => {
                setHamBurgerState({
                    isOpen: false,
                    menuLeftPosition: "-370px",
                })
            }}
            >
            <Atoms.Div position='relative'>
                <Atoms.Div 
                    display='flex' 
                    position="absolute" 
                    left={hamBurgerState.menuLeftPosition}
                    flexDirection='column' 
                    width="calc(350px - 20px)" 
                    padding="10px"
                    height="calc(100vh - 20px)" 
                    backgroundColor="#2B2835" 
                    transition="0.2s ease all">
                    <Molecules.MenuIconList />
                    <Molecules.MenuList />
                </Atoms.Div>
            </Atoms.Div>
        </Atoms.Div>
    )
}

export default HamburgerMenu