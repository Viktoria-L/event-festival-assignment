import { ITicket } from "./ITicket"

interface TicketTypeProps {
    ticketType: ITicket;
}


export const TicketCard = ({ticketType}: TicketTypeProps) => {
    console.log(ticketType)

    const {type, price, benefits} = ticketType;

    const handleClick = () => {

    }
 
    //Gör om benefits till en punktlista ul --> li items
    return (
    <div>
        <h3>{type}</h3>
        <p>{price}</p>
        {benefits.map((benefit, i)=> <p key={i}>{benefit}</p>)}
    </div>
  )
}
