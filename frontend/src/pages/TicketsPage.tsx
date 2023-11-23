import { ITicketTypeResponse } from "../components/utils/ITicketTypeResonse";
import { ITicketHolderResponse } from "../components/utils/ITicketHolderResponse";
import { getData, postData } from "../components/utils/httpClient";
import { useState, useRef, useEffect, type ReactNode } from "react";
import Form, { type FormBehaviour } from '../components/ui/Form';
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import { ITicket, ITicketHolder } from "../components/ticket/ITicket";
import { TicketCard } from "../components/ticket/TicketCard";

const TicketsPage = () => {
    const [error, setError] = useState<string>();
    const [ticketType, setTicketType] = useState<ITicket[]>([]);
    const [ticket, setTicket] = useState<string>('General Admission');
    const [isLoading, setIsLoading] = useState(false);
    const [purchaseDone, setPurchaseDone] = useState(false);
    const [ticketHolder, setTicketHolder] = useState<ITicketHolder>();

    
    useEffect(() => {
      getTicketTypes();
   
     }, [])
  
    const ticketForm = useRef<FormBehaviour>(null);

    //Funktion för att hämta alla biljett-typer
    const getTicketTypes = async ()=> {
      try {
        setIsLoading(true);
        const result = await getData<ITicketTypeResponse>('http://localhost:8080/api/ticketType')
        setTicketType(result.data);
  
      } catch (error) {
        if(error instanceof Error){
          setError(error.message);
          console.log(error.message)
        }
      }
      setIsLoading(false);
    }


     //Funktion för att spara/köpa ticket
    const handleSave = async (data: unknown) => {
    const dataToSave = data as ITicketHolder;
   
    try {
      const result = await postData<ITicketHolder, ITicketHolderResponse>(
        'http://localhost:8080/api/tickets',
        dataToSave
      );

      if (result.statusCode === 201) {
        setPurchaseDone(true);
        console.log("Resultat lyckades", result)
        setTicketHolder(result.data)
        
      } else {
        throw new Error('Sorry, something went wrong, you could not buy the ticket!');
      }
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
    }

        ticketForm.current?.clear();
    };

    const handleTicket = (type: string) => {
        setTicket(type);
    }

    let content: ReactNode;
    
    if(ticketType){
      content = (ticketType.map((ticketItem) =>(
      <div key={ticketItem.id} className="w-64 border-4 rounded-lg h-auto py-4 px-2 hover:transform hover:duration-300 hover:scale-105 cursor-pointer" onClick={()=>handleTicket(ticketItem.type)}>
        <TicketCard ticketType={ticketItem} />
        </div>)))
    }

    if(error){
      content= <p>{error}</p>;
    }

    if(isLoading){
      content = <p>Loading...</p>
    }
    
    if(purchaseDone){
      content = (<div className="flex border-4 rounded-lg py-4 px-2 mx-2 flex-col justify-center items-center"><h3 className="text-center">Thank you {ticketHolder?.firstname}! You successfully purchased a {ticketHolder?.ticket} ticket!</h3>
            
      <div className="flex justify-center mt-4">
        <button className="btn-primary" onClick={()=>setPurchaseDone(false)}>Buy more!</button></div>
      </div>)
    }

  return (
    <main>
    <h1 className='my-12 font-bold text-3xl text-center'>Tickets</h1>
    <p className='text-center'>Here you can explore and buy tickets to the festival and camping area.</p>
    <p className='text-center'>Echoes of Shanti is not just a festival; it's a journey of discovery, celebration, and connection. </p>
    <p className='text-center'>Join us in this serene setting as we unite to celebrate life, art, and the echoes of peace that resonate within us all.</p>
    
    <div className="flex gap-8 lg:gap-20 my-12 justify-center md:mx-8 flex-wrap">{content}</div>

    <h3 className="text-center mb-4">Select ticket type by tapping the tickets above</h3>
    <Form onSave={handleSave} ref={ticketForm} className="flex flex-col items-center">
          <Input type='text' inputId='firstname' labelText='Firstname' className="py-1 px-2"required />
          <Input type='text' inputId='lastname' labelText='Lastname' className="py-1 px-2"required />
          <Input type='text' inputId='email' labelText='Email'className="py-1 px-2" required />
          <Input type='text' inputId='ticket' labelText='Ticket' value={ticket} placeholder={ticket} className="py-1 px-2" readOnly/>
          <div className="btn-primary mt-4 mb-24"><Button>Buy</Button></div>
    </Form>
    
    </main>
  )
}

export default TicketsPage