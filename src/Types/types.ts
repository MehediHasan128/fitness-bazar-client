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