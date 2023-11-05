import { ProductModel } from "./ProductModel";

export interface HomeData {
    heroSection: AdventureSectionCMSDatum[];
    adventureSectionCmsData: AdventureSectionCMSDatum[];
    adventuresData: AdventaureDatum[];
    productsSectionCmsData: AdventureSectionCMSDatum[];
    newArrivalSectionCmsData: NewArrivalCmsDatum[];
    newArrivalData: NewArrivalDatum[];
    retailerSectionCmsData: AdventureSectionCMSDatum[];
    newsLetterSecionCmsData: NewsLetterSecionCMSDatum[];
    blogSectionCmsData: AdventureSectionCMSDatum[];
    latestBlogData: LatestBlogDatum[];
    retailerData: RetailerDatum[];
    productData: ProductModel[];
}

export interface AdventureSectionCMSDatum {
    id: string;
    createdAt: string;
    updatedAt: string;
    isDeleted: boolean;
    title: string;
    description?: string;
    buttonText?: string;
    buttonLink?: string;
    backgroundImage?: string;
    heading?: string;
    image?: string;
    buttonIcon?: null;
    subTitle?: null;
}

export interface AdventaureDatum {
    id: string;
    createdAt: string;
    updatedAt: string;
    isDeleted: boolean;
    title: string;
    description: string;
    icon?: string;
    backgroundImage?: string;
    subTitle?: string;
    urlSlug: string;
}
export interface NewArrivalCmsDatum {
    id: string;
    createdAt: string;
    updatedAt: string;
    isDeleted: boolean;
    title: string;
    description: string;
    icon?: string;
    backgroundImage?: string;
    subTitle?: string;
}

export interface LatestBlogDatum {
    id: string;
    createdAt: string;
    updatedAt: string;
    isDeleted: boolean;
    image: string;
    title: string;
    authorImage: string;
    authorName: string;
    publishedAt: string;
    blogDescription: string;
    urlSlug: string;
    totalViews: number;
}

export interface NewArrivalDatum {
    id: string;
    createdAt: string;
    updatedAt: string;
    isDeleted: boolean;
    name: string;
    urlSlug: string;
    categoryId: string;
    categoryTitle: string;
    featuredImage: string;
    isFeatured: number;
    description: string;
}

export interface NewsLetterSecionCMSDatum {
    id: string;
    createdAt: string;
    updatedAt: string;
    isDeleted: boolean;
    heading: string;
    title: string;
    subTitle: string;
    placeholderText: string;
    buttonText: string;
    backgroundImage: string;
}

export interface RetailerDatum {
    id: string;
    createdAt: string;
    updatedAt: string;
    isDeleted: boolean;
    retailerName: string;
    address: string;
    latitude: string;
    longitude: string;
    retailerLink: string;
    isActive: number;
    services: string;
}
