import { atom } from "recoil";
import { SubProductImage } from "assets/images";
import { subProductType } from "types/subProductType";

export default atom<subProductType>({
    key: "subProduct",
    default: {
        id:1,
        name: "Portable Wireless Speaker",
        description: "Beats Pill",
        color: ['#ffffff', '#DD5656', '#000000'],
        price: 299.95,
        ImageComponent: SubProductImage,
    },
})