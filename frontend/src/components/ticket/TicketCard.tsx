import { ITicket } from "./ITicket"

interface TicketTypeProps {
    ticketType: ITicket;
}

export const TicketCard = ({ticketType}: TicketTypeProps) => {

    const {type, price, benefits, image} = ticketType;

    return (
    <div className="flex flex-col items-center">
        <h3 className="font-bold tracking-wide mb-2">{type}</h3>
        <img src={image} className="w-44 rounded-md mb-2"/>
        <p>{price}</p>
        <ul>
        {benefits.map((benefit, i)=> <li className="list-inside list-disc" key={i}>{benefit}</li>)}
        </ul>
    </div>
  )
}
