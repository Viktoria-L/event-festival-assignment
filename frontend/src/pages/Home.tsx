import Hero from "../components/ui/Hero";

//Flytta ut allt till Activities.tsx filen
const Home = () => {


  return (
    <main className="w-full">
      <Hero />
      {/* <section className="bg-gradient-to-b from-black via-black to-green-900 h-[590px]"></section> */}
      <section className="bg-black h-[590px]"></section>
    </main>
  );
};

export default Home;
