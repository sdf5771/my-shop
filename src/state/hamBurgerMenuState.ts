import { atom } from "recoil";

export default atom({
    key: "hamBurgerMenuState",
    default: {
        isOpen: false,
        menuLeftPosition: "-350px",
    },
})