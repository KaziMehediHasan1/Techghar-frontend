export interface IPaymentResponse {
  data: {
    _id: string;
    transactionId: string;
    amount: number | string;
    isPaid: boolean;
    paymentMethod: string;
  }[];
  meta: {
    page: number;
    limit: number;
    total: number;
    totalPage: number;
  };
}

export interface IUserResponse {
  data: {
    _id: string;

    name: string;
    email: string;
    role: string;
    createdAt: string;
    updatedAt: string;
  }[];
  meta: {
    page: number;
    limit: number;
    total: number;
    totalPage: number;
  };
}


export interface IBlogResponse {
  data: {
    result: {
      _id: string;
      title: string;
      content: string;
      createdAt: string;
      updatedAt: string;
    }[];
    total: number;
  };
  meta: {
    page: number;
    limit: number;
    total: number;
    totalPage: number;
  };
}
