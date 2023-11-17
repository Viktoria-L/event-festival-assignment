import { getData } from '../components/utils/httpClient';
import { useEffect, useState, type ReactNode } from 'react';
import { IActivity } from '../components/activities/IActivity';
import { IActivitiesResponseType } from '../components/utils/IActivitiesResponseType';


//Flytta ut allt till Activities.tsx filen
const Home = () => {
  const [activities, setActivities] = useState<IActivity[]>([]);
  const [error, setError] = useState<string>();

  useEffect(() => {
   getActivities();
  }, [])
  

  //Funktion för att hämta alla aktiviteter
  const getActivities = async () => {
    try {
      const result = await getData<IActivitiesResponseType>('http://localhost:8080/api/activities')
      setActivities(result.data);
      console.log("result", result)

    } catch (error) {
      if(error instanceof Error){
        setError(error.message);
        console.log(error.message)
      }
    }
  }


  let content: ReactNode;
  
  if(activities){
    content = (
      <>
      {activities.map((activity) => (<div>
        <h2>{activity.activity}</h2>
      </div>))}
      
      </>
      )
  }

  return (
    <main>
      {content}
    </main>
  );
};

export default Home;
