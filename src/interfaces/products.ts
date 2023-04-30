export interface IProduct {
    _id: string,
    code: string;
    name: string;
    description: string;
    urlImage: string[];
    category: ICategory;
    subcategory: ISubcategory;
}

export type ICategory = 'iron' | 'steel';
export type ISubcategory = 'doors' | 'windows';