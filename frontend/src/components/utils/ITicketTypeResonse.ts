import { IResponseBaseType } from "./IResponseBaseType";
import { ITicket } from "../ticket/ITicket";

export interface ITicketTypeResponse extends IResponseBaseType {
    data: ITicket[];
}