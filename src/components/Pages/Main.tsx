import React from 'react';
import { useRecoilState } from 'recoil';
import state from 'state';
import Atoms from 'components/Atoms';
import Organisms from 'components/Organisms';
import Templates from 'components/Templates'

function Main(){
    const [mainProduct, setMainProduct] = useRecoilState(state.mainProduct);
    const [subProduct, setSubProduct] = useRecoilState(state.subProduct);
    const [products, setProducts] = useRecoilState(state.products);

    return(
        <Atoms.Div width="100vw">
            <Templates.Header />
            <Atoms.Div width="100%">
                <Atoms.Div width="100%" height="616px" backgroundColor="#2B2835">
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
                    <Atoms.Div marginTop="30px" display='flex' flexWrap='wrap' justifyContent='center' gap="30px" padding="0 60px">
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
                    <Atoms.Div marginTop="30px">
                        <Organisms.SignUpForm />
                    </Atoms.Div>
                </Atoms.Div>
            </Atoms.Div>
            <Templates.Footer />
        </Atoms.Div>
    )
}

export default Main;