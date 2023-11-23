import { useState, useEffect, type ReactNode } from "react";
import { IActivity } from "../components/activities/IActivity";
import { useParams } from "react-router-dom";
import { getData } from "../components/utils/httpClient";
import { IActivityResponseType } from "../components/utils/IActivitiesResponseType";
import Progress from "../components/ui/Progress";
import ActivityDetails from "../components/activities/ActivityDetails";


const ActivityDetailPage = () => {
  const [activity, setActivity] = useState<IActivity>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>();

  const params = useParams();
  
  useEffect(() => {
    const getActivity = async () => {
        try {
            setIsLoading(true);
            const result = await getData<IActivityResponseType>(`http://localhost:8080/api/activities/${params.id}`);
            setActivity(result.data);
      console.log("response", result)

        } catch(error) {
            if(error instanceof Error){
                setError(error.message);
            }
        }
        setIsLoading(false);

    };

    getActivity();
  }, [params.id])
  
let content: ReactNode;

//Beroende på aktivitet kanske en props om mode måste in eftersom datat ser olika ut?
  if(activity){
    content = <ActivityDetails activity={activity} />
  }

  if(isLoading){
    content = <Progress text="Loading activity, hold on..."/>
  }

  if(error) {
    content = <div>{error}</div>
  }


  //Byt header rubrik här nedan
    return (
    <main>
          <h1 className='mt-12 mb-8 font-bold text-3xl text-center'>Program Info</h1>
          <p className="text-center">Echoes Of Shanti festival has a lot to offer!</p>
          <p className="text-center">Don't miss out on this magical weekend, making new memories!</p> 
        {content}
    </main>
  )
}

export default ActivityDetailPage;