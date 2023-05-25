import { atom } from "recoil";
import { MainProductImage } from "assets/images";
import { mainProductType } from "types/mainProductType";

export default atom<mainProductType>({
    key: "mainProduct",
    default: {
        id:1,
        name: "Beats Studio3 Wireless",
        description: "Experience your \n music like never before.",
        price: 299.95,
        ImageComponent: MainProductImage,
    },
})