export interface IOrder {
    _id: string;
    createdAt: string;
    totalPrice: number;
    productID?: [];
    status: string;
    quantity: number;
}

export interface IOrderData {
    success: boolean;
    statusCode: number;
    message: string;
    data: IOrder[];
}