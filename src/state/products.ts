import { atom } from "recoil";
import { 
    HeadphoneBlackImage, 
    HeadphoneYellowImage, 
    BlueTouthHeadphoneBlackImage, 
    BlueTouthHeadphoneBrownImage, 
    EarphoneBlackImage, 
    EarphoneGoldImage } from "assets/images";
import { productType } from "types";

export default atom<productType[]>({
    key: "products",
    default: [
        {
            id:1,
            name: "Beatsˣ",
            description: "Up to 8 hour of battery life \n With Fast Fuel, a 5-minute charge = 2 \n hours of playback",
            price: 299.95,
            ImageComponent: HeadphoneYellowImage,
        },
        {
            id:2,
            name: "Beatsˣ",
            description: "Up to 8 hour of battery life \n With Fast Fuel, a 5-minute charge = 2 \n hours of playback",
            price: 299.95,
            ImageComponent: BlueTouthHeadphoneBlackImage,
        },
        {
            id:3,
            name: "Beatsˣ",
            description: "Up to 8 hour of battery life \n With Fast Fuel, a 5-minute charge = 2 \n hours of playback",
            price: 299.95,
            ImageComponent: HeadphoneBlackImage,
        },
        {
            id:4,
            name: "Beatsˣ",
            description: "Up to 8 hour of battery life \n With Fast Fuel, a 5-minute charge = 2 \n hours of playback",
            price: 299.95,
            ImageComponent: EarphoneGoldImage,
        },
        {
            id:5,
            name: "Beatsˣ",
            description: "Up to 8 hour of battery life \n With Fast Fuel, a 5-minute charge = 2 \n hours of playback",
            price: 299.95,
            ImageComponent: BlueTouthHeadphoneBrownImage,
        },
        {
            id:6,
            name: "Beatsˣ",
            description: "Up to 8 hour of battery life \n With Fast Fuel, a 5-minute charge = 2 \n hours of playback",
            price: 299.95,
            ImageComponent: EarphoneBlackImage,
        },
    ]
})