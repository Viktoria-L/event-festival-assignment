import Hero from "../components/ui/Hero";
import { GiHeraldicSun } from "react-icons/gi";
import { GiTechnoHeart } from "react-icons/gi";

const Home = () => {

  return (
    <main>
      <Hero />
      <div className="w-full flex justify-center mt-12">
        <div className="md:w-1/2 text-center">
          <h2 className="text-xl">~ Dance, Reflect, Unite in Nature's Harmony ~</h2>
          <p className="mt-4 mb-8">Welcome to Echoes of Shanti, a unique festival experience where music, art, spirituality, and nature converge in a symphony of harmony. Deeply rooted in the woods by a picturesque lake, our festival invites you to a realm where the pulsating rhythms of techno, techhouse, and trance meet the tranquility of yoga and the vibrant expressions of art.</p>
        </div>
      </div>
      <section className="px-4 flex flex-col justify-center w-full items-center overflow-hidden">
        <div className="flex overflow-hidden flex-wrap justify-center">
          <img src="/images/music.png" alt="people dancing in front of scene" className="w-96 h-96 hover:transform hover:duration-700 hover:scale-105"/>
          <img src="/images/1.png" alt="stage by the lake" className="w-96 h-96 hover:transform hover:duration-700 hover:scale-105"/>
        </div>
        <div className="flex overflow-hidden flex-wrap justify-center">
          <img src="/images/2.png" alt="chill area by the lake" className="w-96 h-96 hover:transform hover:duration-700 hover:scale-105"/>
          <img src="/images/3.png" alt="foodstall by the lake" className="w-96 h-96 hover:transform hover:duration-700 hover:scale-105"/>
        </div>
      </section>
      <div className="w-full flex justify-center items-center">
        <div className="md:w-1/2 text-center">
          <p className="mt-8">At Echoes of Shanti, you can dance to the hypnotic beats across our music stages, surrounded by the whispers of trees and the shimmering waters of the lake. Each stage is a masterpiece in itself, designed to elevate your musical journey and bring together like-minded souls in a shared euphoria of freedom and joy.</p>
          <div className="flex justify-center items-center py-8">
            <GiHeraldicSun className="text-6xl"/>
          </div>
          <p>For those seeking inner peace and rejuvenation, we offer yoga and meditation classes, where you can find balance and harmony within. Led by passionate instructors, our classes are an invitation to explore both physical and spiritual realms of well-being.</p>
          <div className="flex justify-center items-center py-8">
            <GiTechnoHeart className="text-5xl"/>
          </div>
          <p className="mb-32">Art also plays a pivotal role at Echoes of Shanti. Discover inspiring exhibitions and interactive installations that transport you into the boundless realm of creativity. Here, every brushstroke and every sculpture tells a story, inviting you to connect with the artists and their visions.</p>
        </div>
      </div>
      
    </main>
  );
};

export default Home;
