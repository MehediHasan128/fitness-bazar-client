export type TProducts = {
    _id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    quantity: number;
    categoryId: string;
    category: string;
}

export type TCategory = {
    _id: string
    categoryName: string;
    categoryImage: string;
}