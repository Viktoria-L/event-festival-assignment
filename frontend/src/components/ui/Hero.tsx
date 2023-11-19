import { Link } from "react-router-dom";


const Hero = () => {


  return (
    <>
      <section className="relative bg-[url('src/assets/images/green.png')] bg-cover bg-center bg-no-repeat w-full">
           
        <div className="absolute inset-0 max-h-[509px]"></div>
        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6">
            <div className="max-w-xl text-center">
              <h1 className="font-fontZ font-white text-7xl sm:text-7xl tracking-widest">
                ECHOES OF
                  <strong className="block mt-4 sm:text-7xl text-white">       
                    SHANTI
                  </strong>
              </h1>
              <p className="mt-4 text-xl text-green-400 font-bold tracking-wider">
                13-16 JUNE 2024, Croatia
              </p>
              <p className="mt-4 text-sm">
                3 DAYS - 30 ARTISTS - 5000 PARTICIPANTS
              </p>

        

                    <div className="mt-8 flex flex-wrap gap-4 text-center justify-center">
                        <Link to="/program" className="btn-primary">
                        BUY TICKETS NOW!
                        </Link>
                    </div>
            </div>
        </div>
        </section>
      </>
  )
}

export default Hero;