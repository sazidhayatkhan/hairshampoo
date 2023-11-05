export interface ProductModel {
	id: string;
	createdAt: string;
	updatedAt: string;
	isDeleted: number;
	name: string;
	urlSlug: string;
	featuredImage: string;
	categoryId: string;
	description: string;
	categoryTitle: string;
	isFeatured: number;
}