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
    priceOffer?: number,
    img: string,
    attributes: ATFProduct,
}