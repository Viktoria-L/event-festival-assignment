import { ITicketHolder } from "../ticket/ITicket";
import { IResponseBaseType } from "./IResponseBaseType";

export interface ITicketHolderResponse extends IResponseBaseType {
    data: ITicketHolder;
}
