export interface Address {
    _id?: string;
    id?: number;
    fullName: string;
    label: string;
    street: string;
    city: string;
    addressLine: string;
    state: string;
    zipCode: string;
    phone: string;
    isDefaultBilling: boolean;
    isDefaultShipping: boolean;
    type?: string;
}


export interface IAddress {
    fullName: string;
    label: string;
    street: string;
    city: string;
    addressLine: string;
    zipCode: string | number;
    state: string;
    phone: string;
    isDefaultShipping?: boolean;
    isDefaultBilling?: boolean;
}

export interface IProfileData {
    _id: string;
    userID: string;
    address: IAddress;
    orders: string[];
    wishlist: string[];
    reviews: string[];
    createdAt: string;
    updatedAt: string;
    __v: number;
    isDefaultShipping?: boolean;
    isDefaultBilling?: boolean;
}

export interface IApiResponse<T> {
    success: boolean;
    statusCode: number;
    message: string;
    data: T;
}

export type IProfileResponse = IApiResponse<IProfileData>;