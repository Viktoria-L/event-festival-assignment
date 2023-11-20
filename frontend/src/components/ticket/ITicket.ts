export interface ITicket {
    id: number;
    type: string;
    price: string;
    benefits: string[];
    image: string;
}

export interface ITicketHolder {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
    ticket: string;
}
