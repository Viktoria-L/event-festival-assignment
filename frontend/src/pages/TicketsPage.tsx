import { IActivity } from "../components/activities/IActivity";
import { IActivitiesResponseType } from "../components/utils/IActivitiesResponseType";
import { ITicketTypeResponse } from "../components/utils/ITicketTypeResonse";
import { getData, postData } from "../components/utils/httpClient";
import { useState, useRef, useEffect, type ReactNode } from "react";
import Form, { type FormBehaviour } from '../components/ui/Form';
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import { ITicket } from "../components/ticket/ITicket";
import { TicketCard } from "../components/ticket/TicketCard";

const TicketsPage = () => {
    const [error, setError] = useState<string>();
    const [ticketType, setTicketType] = useState<ITicket[]>([]);
    const [ticket, setTicket] = useState<string>();
    const [isLoading, setIsLoading] = useState(false);
    
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
        console.log("result", result)
  
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
    const dataToSave = data as IActivity;

    console.log("datatoSave", dataToSave)
    //Det fungerar men jag har inte byggt upp min databas som jag lägger in tickets
    //kanske göra en tickets och sen en ticketHolders som man fetchar mot för att där kunna se alla som köpt tickets
    // för nu lägger köparen sig som en biljett

    try {
      const result = await postData<IActivity, IActivitiesResponseType>(
        'http://localhost:8080/api/tickets',
        dataToSave
      );

      if (result.statusCode === 201) {
        // getTickets();
        //Gör nåt med responsen,
        console.log("Resultat lyckades", result)
      } else {
        throw new Error('Det gick inte att köpa biljetten!');
      }
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
    }

        ticketForm.current?.clear();
    };

    //Det fungerar nu att välja biljett och sätta den i inputfältet för vald biljett, dock måste jag görade olika biljett
    //typerna klara och skriva in dessa samt skicka in som parameter i handleTicket
    const handleTicket = () => {
        setTicket("he556");
    }

    let content: ReactNode;
    
if(ticketType){
  content = (ticketType.map((ticketItem) => <TicketCard ticketType={ticketItem} />))
}


  return (
    <main>
    <div>TicketsPage</div>
    <div>{content}</div>
    <div className="bg-green-300 m-4" onClick={handleTicket}>Låtsasbiljett</div>
    <Form onSave={handleSave} ref={ticketForm}>
          <Input type='text' inputId='firstname' labelText='Firstname' />
          <Input type='text' inputId='lastname' labelText='Lastname' />
          <Input type='text' inputId='email' labelText='Email' />
          <Input type='number' inputId='phonenumber' labelText='Phonenumber' />
          <Input type='text' inputId='ticket' labelText='Ticket' value={ticket} placeholder={ticket} />
          <Input type='number' inputId='price' labelText='Price' />
          <Button>Buy</Button>
        </Form>
    </main>
  )
}

export default TicketsPage