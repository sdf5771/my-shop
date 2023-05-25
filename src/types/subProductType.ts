export type subProductType = {
    id: number,
    name: string,
    description: string,
    color: string[],
    price: number,
    ImageComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>,
}