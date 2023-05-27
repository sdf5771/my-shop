import React from 'react';
import { useRecoilState } from 'recoil';
import state from 'state';
import Atoms from 'components/Atoms';
import Organisms from 'components/Organisms';
import Templates from 'components/Templates';
import { useMediaQuery } from 'react-responsive';

function Main(){
    const [mainProduct, setMainProduct] = useRecoilState(state.mainProduct);
    const [subProduct, setSubProduct] = useRecoilState(state.subProduct);
    const [products, setProducts] = useRecoilState(state.products);
    const isWideScreen: boolean = useMediaQuery({
        query: "(min-width:1440px)",
    });

    return(
        <Atoms.Div width="100vw">
            <Templates.Header />
            <Atoms.Div width="100%">
                <Atoms.Div width="100%" height="616px" mediaHeight='208px' backgroundColor="#2B2835">
                    <Organisms.MainProductElement 
                        id={mainProduct.id} 
                        name={mainProduct.name} 
                        description={mainProduct.description} 
                        price={mainProduct.price} 
                        ImageComponent={mainProduct.ImageComponent}/>
                </Atoms.Div>
                <Atoms.Div display="flex" flexDirection='column' width="100%" backgroundColor="#ffffff">
                    <Atoms.Div width='100%'>
                        <Organisms.SubProductElement 
                            id={subProduct.id} 
                            name={subProduct.name} 
                            price={subProduct.price} 
                            description={subProduct.description} 
                            color={subProduct.color} 
                            ImageComponent={subProduct.ImageComponent}/>
                    </Atoms.Div>
                    <Atoms.Div 
                        marginTop="30px" 
                        display={isWideScreen ? "grid" : 'flex'} 
                        gridTemplateColumns='repeat(3, minmax(auto, 1fr))'
                        flexWrap='wrap' 
                        justifyContent="space-between"
                        gap="30px" 
                        width="calc(100% - 120px)"
                        padding="0 60px"
                        
                        >
                        {products ? products.map((product, index) => {
                            return <Organisms.ProductElement 
                                        key={product.id} 
                                        id={product.id}
                                        name={product.name}
                                        description={product.description}
                                        price={product.price}
                                        ImageComponent={product.ImageComponent}
                                        />
                        }) : null}
                    </Atoms.Div>
                    <Atoms.Div display='flex' justifyContent='center' alignContent='center' width="calc(100% - 120px)" marginTop="30px" padding="30px 60px 40px 60px">
                        <Organisms.SignUpForm />
                    </Atoms.Div>
                </Atoms.Div>
            </Atoms.Div>
            <Templates.Footer />
        </Atoms.Div>
    )
}

export default Main;