import { IOrderRows } from "./IOrderRows";

export interface IOrders{
    id: string;
    companyId: number;
    created: string;
    createdBy: string;
    paymentMethod: string;
    totalPrice: number;
    status: number;
    orderRows:IOrderRows[];
}

