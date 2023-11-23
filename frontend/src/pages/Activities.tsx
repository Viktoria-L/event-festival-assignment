import { getData } from '../components/utils/httpClient';
import { useEffect, useState, type ReactNode } from 'react';
import { IActivity } from '../components/activities/IActivity';
import { IActivitiesResponseType } from '../components/utils/IActivitiesResponseType';
import ActivityCard from '../components/activities/ActivityCard';
import Progress from '../components/ui/Progress';

const Activities = () => {

  const [activities, setActivities] = useState<IActivity[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>();

  useEffect(() => {
   getActivities();
  }, [])
  
  const getActivities = async () => {
    try {
      setIsLoading(true);
      const result = await getData<IActivitiesResponseType>('http://localhost:8080/api/activities')
      setActivities(result.data);

    } catch (error) {
      if(error instanceof Error){
        setError(error.message);
        console.log(error.message)
      }
    }
    setIsLoading(false);
  }

  let content: ReactNode;
  
  if(activities){
    content = (
      <>
      <p className='text-center'>Here you can explore all the different activities on the festival grounds.</p>
      <div className='flex flex-wrap justify-center gap-8 my-12 max-w-[1500px] items-center'>
        {activities.map((activity) => 
        <ActivityCard activityData={activity} key={activity.id}/>)}           
      </div>
      </>
      )
  }
  
  if(isLoading){
    content = <Progress text="Loading activities, please wait..."/>
  
  }

  if(error){
     content = <h2>{error}</h2>;
  }


  return (
    <main>
      <h1 className='my-12 font-bold text-3xl text-center'>Program</h1>
    <div className='w-full flex flex-col justify-center items-center'>
    {content}
    </div>
    </main>
  )
}

export default Activities;