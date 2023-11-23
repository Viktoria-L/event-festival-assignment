import { FormEvent, useRef } from 'react';

type Customer = {
    firstName: string;
    lastName: string;
    email: string;
    message:string;
}

const ContactForm = () => {
    const firstName = useRef<HTMLInputElement>(null)
    const lastName = useRef<HTMLInputElement>(null)
    const email = useRef<HTMLInputElement>(null)
    const message = useRef<HTMLTextAreaElement>(null)
    

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const customer: Customer = {
            firstName: firstName.current!.value,
            lastName: lastName.current!.value,
            email: email.current!.value,
            message:message.current!.value,
        };


        e.currentTarget.reset()
        console.log(customer);
    }


  return (
    <form onSubmit={handleSubmit}>
            <div className='form-control'>
              <label htmlFor='firstName'>Firstname</label>
              <input ref={firstName} type='text' name='firstName' id='firstName' />
            </div>
            <div className='form-control'>
              <label htmlFor='lastName'>Lastname</label>
              <input ref={lastName} type='text' name='lastName' id='lastName' />
            </div>
            <div className='form-control'>
              <label htmlFor='email'>E-mail</label>
              <input ref={email} type='email' name='email' id='email' />
            </div>
            <div className='form-control'>
              <label htmlFor='message'>Message</label>
              <textarea ref={message} name='message' id='message' cols={30} rows={10}></textarea>
            </div>
            <div className='submit-controls flex justify-center'>
              <button className='btn-primary' type='submit'>
                Send
              </button>
            </div>
    </form>
  )
}

export default ContactForm