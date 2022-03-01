import { ICategory } from "./ICategories";

//Below information is from api/products
export interface IProduct {
    id: string;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    year: number;
    added: Date;
    productCategory: ICategory[];
}