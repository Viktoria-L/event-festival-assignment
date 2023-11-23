import { ITicketHolder } from "../ticket/ITicket";
import { IResponseBaseType } from "./IResponseBaseType";

export interface ITicketHolderResponse extends IResponseBaseType {
    data: ITicketHolder;
}

export interface ITicketHoldersResponse extends IResponseBaseType {
    data: ITicketHolder[];
}