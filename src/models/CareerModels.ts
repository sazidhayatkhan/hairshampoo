export interface CareerListData {
    careers: Career[];
    page: number;
    limit: number;
    pageCount: number;
}

export interface CareerPageCMSDatum {
    id: string;
    createdAt: string;
    updatedAt: string;
    isDeleted: boolean;
    title: string;
}

export interface Career {
    id: string;
    createdAt: string;
    updatedAt: string;
    isDeleted: boolean;
    title: string;
    jobType: string;
    description: string;
    salary: string;
    urlSlug: string;
}
