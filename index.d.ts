type TProductId = string;

type ATFProduct = {
    info: string,
    policy:string,
    shipment: string,
    description: string
}

type TProduct = {
    id: string,
    sku: string,
    price: number,
    name: string,
    types: string,
    offer: boolean,
    BestSellers:boolean,
    priceOffer?: number,
    img: string,
    attributes: ATFProduct,
}

type category = {
    img: string,
    link: string,
    type:string,
}

type linkBar = {
    link: string,
    txt: string,
}