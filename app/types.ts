export type ProductDetailsType = {
    id: string;
    name: string;
    price: number;
    description: string;
    inStock: boolean;
    img: string;
}

export type ProductReviewType = {
    productId: string;
    title: string;
    description: string;
    author: string;
    date: string;
}

export type UserType = {
    id: string,
    name:string,
    img: string,
}