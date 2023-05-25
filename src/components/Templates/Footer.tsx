import React from 'react';
import Atoms from 'components/Atoms';
import { Logo, SNSIcons } from 'assets/logos';

function Footer(){
    return(
        <Atoms.Div display="flex" flexDirection='column' justifyContent='center' backgroundColor="#2B2835" width="calc(100% - 160px)" height="calc(344px - 60px)" padding="30px 80px" >
            <Atoms.Div display="flex" justifyContent='space-between' alignContent='center'>
                <Atoms.Div>
                    <Logo />
                </Atoms.Div>

                <Atoms.Div display="flex" flexDirection='column' gap="10px">
                    <Atoms.Span fontSize="24px" lineHeight="31px" fontWeight="600" color="#ffffff">Products</Atoms.Span>
                    <Atoms.Div display="flex" flexDirection='column'>
                        <Atoms.Span fontSize="12px" lineHeight="22px" fontWeight="400" color="#B8B8B8">HEADPHONES</Atoms.Span>
                        <Atoms.Span fontSize="12px" lineHeight="22px" fontWeight="400" color="#B8B8B8">EARPHONES</Atoms.Span>
                        <Atoms.Span fontSize="12px" lineHeight="22px" fontWeight="400" color="#B8B8B8">SPEAKERS</Atoms.Span>
                        <Atoms.Span fontSize="12px" lineHeight="22px" fontWeight="400" color="#B8B8B8">ACCESSORES</Atoms.Span>
                        <Atoms.Span fontSize="12px" lineHeight="22px" fontWeight="400" color="#B8B8B8">COLLABORATIONS</Atoms.Span>
                        <Atoms.Span fontSize="12px" lineHeight="22px" fontWeight="400" color="#B8B8B8">BEATSAUDIO</Atoms.Span>
                        <Atoms.Span fontSize="12px" lineHeight="22px" fontWeight="400" color="#B8B8B8">SPECIAL OFFERS</Atoms.Span>
                    </Atoms.Div>
                </Atoms.Div>

                <Atoms.Div display="flex" flexDirection='column' gap="10px">
                    <Atoms.Span fontSize="24px" lineHeight="31px" fontWeight="600" color="#ffffff">Support</Atoms.Span>
                    <Atoms.Div display="flex" flexDirection='column'>
                        <Atoms.Span fontSize="12px" lineHeight="22px" fontWeight="400" color="#B8B8B8">PRODUCT HELP</Atoms.Span>
                        <Atoms.Span fontSize="12px" lineHeight="22px" fontWeight="400" color="#B8B8B8">SERVICE & WARRANTY</Atoms.Span>
                        <Atoms.Span fontSize="12px" lineHeight="22px" fontWeight="400" color="#B8B8B8">REGISTER YOUR BEATS</Atoms.Span>
                        <Atoms.Span fontSize="12px" lineHeight="22px" fontWeight="400" color="#B8B8B8">UPDATE YOUR BEATS</Atoms.Span>
                        <Atoms.Span fontSize="12px" lineHeight="22px" fontWeight="400" color="#B8B8B8">AUTHORIZED SERVICE PROVIDERS</Atoms.Span>
                        <Atoms.Span fontSize="12px" lineHeight="22px" fontWeight="400" color="#B8B8B8">CONTACT SUPPORT</Atoms.Span>
                        <Atoms.Span fontSize="12px" lineHeight="22px" fontWeight="400" color="#B8B8B8">INTERNATIONAL NUMBERS</Atoms.Span>
                    </Atoms.Div>
                </Atoms.Div>

                <Atoms.Div display="flex" flexDirection='column' gap="10px">
                    <Atoms.Span fontSize="24px" lineHeight="31px" fontWeight="600" color="#ffffff">Company</Atoms.Span>
                    <Atoms.Div display="flex" flexDirection='column'>
                        <Atoms.Span fontSize="12px" lineHeight="22px" fontWeight="400" color="#B8B8B8">PRODUCT HELP</Atoms.Span>
                        <Atoms.Span fontSize="12px" lineHeight="22px" fontWeight="400" color="#B8B8B8">NEWS AND EVENTS</Atoms.Span>
                        <Atoms.Span fontSize="12px" lineHeight="22px" fontWeight="400" color="#B8B8B8">PROMOTION TERMS</Atoms.Span>
                        <Atoms.Span fontSize="12px" lineHeight="22px" fontWeight="400" color="#B8B8B8">PRIVACY POLICY</Atoms.Span>
                        <Atoms.Span fontSize="12px" lineHeight="22px" fontWeight="400" color="#B8B8B8">TRADEMARK</Atoms.Span>
                        <Atoms.Span fontSize="12px" lineHeight="22px" fontWeight="400" color="#B8B8B8">TERMS OF USE</Atoms.Span>
                        <Atoms.Span fontSize="12px" lineHeight="22px" fontWeight="400" color="#B8B8B8">COOKIES</Atoms.Span>
                    </Atoms.Div>
                </Atoms.Div>

                <Atoms.Div display="flex" flexDirection='column' gap="10px">
                    <Atoms.Span fontSize="24px" lineHeight="31px" fontWeight="600" color="#ffffff">Follow Us</Atoms.Span>
                    <Atoms.Div display="flex" flexDirection='column'>
                        <SNSIcons />
                    </Atoms.Div>
                </Atoms.Div>
            </Atoms.Div>

            <Atoms.Div display='flex' marginTop="40px" justifyContent='center' width="100%">
                <Atoms.Span fontSize="12px" color="#ffffff" fontWeight="300" lineHeight="15px">Copyright @ 2020 Apple Inc. - All rights reserved.</Atoms.Span>
            </Atoms.Div>
        </Atoms.Div>
    )
}

export default Footer;