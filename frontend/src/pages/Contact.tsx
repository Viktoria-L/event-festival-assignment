import ContactForm from '../components/contact/ContactForm';

const ContactPage = () => {
  return (
    <main>
      <h1 className='my-12 font-bold text-3xl text-center'>Contact Us</h1>
    
      <article>
        <section id='contact-form'>
          <p className='text-center mb-4'>Fill in this form to ask us something or give us feedback.</p>
          <ContactForm />
        </section>
        <section id='contact-info flex justify-center'>
          <div className='container flex justify-around mt-12'>
            <div className='box'>
              <h3>Where are we ?</h3>
              <p>Fanastystreet, Croatia</p>
            </div>
            <div className='box'>
              <i className='fa-sharp fa-solid fa-circle-phone-hangup fa-2x'></i>
              <h3>Phone</h3>
              <p>07070707</p>
            </div>
            <div className='box'>
              <i className='fa-sharp fa-solid fa-envelope fa-2x'></i>
              <p>hello@eos.nu</p>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
};

export default ContactPage;
