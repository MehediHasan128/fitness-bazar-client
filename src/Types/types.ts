export type TProducts = {
    _id: string;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    quantity: number;
    categoryId: string;
    category: string;
}

export type TCategory = {
    _id: string
    categoryName: string;
    categoryImage: string;
}

export type TCartProduct = {
    _id: string;
    productId: string;
    productImage: string;
    productName: string;
    productPrice: number;
    productQuantity: number;
}