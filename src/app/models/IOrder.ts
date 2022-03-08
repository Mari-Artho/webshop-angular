import { IOrderRows } from "./IOrderRows";

export interface IOrder {
    companyId: number;
    createdBy: string;
    paymentMethod: string;
    totalPrice: number;
    status: number;
    orderRows:IOrderRows[];
}

  