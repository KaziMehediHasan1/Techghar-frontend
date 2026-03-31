export interface TOrderApiResponse<T> {
  success?: boolean;
  message?: string;

  data: {
    result: T[];
    meta: {
      page: number;
      limit: number;
      total: number;
      totalPage: number;
    };
  };
  total?: number;
  page?: number;
  limit?: number;
}

export interface TOrder {
  _id: string;
  quantity: number;
  status: string;
  cancelledAt: Date | null;
  productName: string;
  productImages: string[];
  productPrice: number;
  customerEmail: string;
  transactionId: string;
  amount: number;
  isPaid: boolean;
  paymentMethod: string;
}

export interface IOrderUpdateData {
  _id?: string;
  quantity?: number;
  status?: string;
}

// _id: 1,
//         quantity: 1,
//         status: 1,
//         cancelledAt: 1,
//         productName: "$productData.title",
//         productImages: "$productData.images",
//         productPrice: "$productData.price",
//         customerEmail: "$customerData.email",
//         transactionId: "$paymentData.transactionId",
//         amount: "$paymentData.amount",
//         isPaid: "$paymentData.isPaid",
//         paymentMethod: "$paymentData.paymentMethod",
//       },
