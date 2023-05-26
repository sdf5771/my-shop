import React from 'react';
import Atoms from 'components/Atoms';
import Molecules from 'components/Molecules';
import Organisms from 'components/Organisms';
import { Logo } from 'assets/logos';
import { HamburgerIcon } from 'assets/logos';
import { useMediaQuery } from 'react-responsive';
import { useRecoilState } from 'recoil';
import hamBurgerMenuState from 'state/hamBurgerMenuState';

function Header(){
    const isNotDesktop: boolean = useMediaQuery({
        query: "(min-width:1024px)",
    });
    const [hamBurgerState, setHamBurgerState] = useRecoilState(hamBurgerMenuState);

    return(
        <Atoms.Div 
            zIndex="10" 
            position="fixed" 
            display="flex" 
            justifyContent='space-between'
            alignItems='center'
            width="calc(100% - 140px)" 
            height="calc(78px - 20px)" 
            backgroundColor="rgb(25, 23, 32, 0.5)" 
            padding="10px 70px"
            
            mediaFlexDirection='column'
            mediaPosition='absolute'
            mediaBackgroundColor='unset'
            mediaPadding='10px 20px'
            mediaWidth='calc(100% - 40px)'
            mediaAlignItems='flex-start'
            mediaHeight='calc(50px - 20px)'
            >
            <Atoms.Div 
                width="50px" height="50px" 
                minWidth="50px" minHeight="50px" 
                mediaWidth='27px' mediaHeight='27px'
                mediaMinWidth='27px' mediaMinHeight='27px'
                >
                <Logo width="100%" height="100%"/>
            </Atoms.Div>
            { isNotDesktop ? 
                <>
                    <Molecules.MenuList />
                    <Molecules.MenuIconList />
                </>
             : 
                hamBurgerState.isOpen ? <Organisms.HamburgerMenu /> : null
             }
            
            <Atoms.Div 
                display="none" 
                mediaDisplay='block' 
                mediaPosition='absolute' 
                mediaTop='10px' 
                mediaRight='30px'
                cursor='pointer'
                onClick={(event: React.MouseEvent<HTMLDivElement>) => {
                    if(hamBurgerState.isOpen){
                        setHamBurgerState({
                            isOpen: false,
                            menuLeftPosition: "-350px",
                        })
                    } else {
                        setHamBurgerState({
                            isOpen: true,
                            menuLeftPosition: "0px",
                        })
                    }
                }}
                >
                <HamburgerIcon />
            </Atoms.Div>
        </Atoms.Div>
    )
}

export default Header;