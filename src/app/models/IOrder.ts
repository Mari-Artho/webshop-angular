import { IOrderRow } from "./IOrderRow";

export interface IOrder {
    id: number;
    companyId: number;
    createdBy: string;
    paymentMethod: string;
    totalPrice: number;
    status: number;
    orderRows:IOrderRow[];
}
