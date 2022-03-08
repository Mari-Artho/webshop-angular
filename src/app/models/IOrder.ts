import { IOrderRow } from "./IOrderRow";

export interface IOrder {
    companyId: number;
    createdBy: string;
    paymentMethod: string;
    totalPrice: number;
    status: number;
    orderRows:IOrderRow[];
}
