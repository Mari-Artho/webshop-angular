import { IOrderRow } from "./IOrderRow";

export interface IOrder {
    orderId: number;
    companyId: number;
    createdBy: string;
    paymentMethod: string;
    totalPrice: number;
    status: number;
    orderRows:IOrderRow[];
}
