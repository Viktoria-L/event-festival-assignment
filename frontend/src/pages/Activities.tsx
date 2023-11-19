import { getData } from '../components/utils/httpClient';
import { useEffect, useState, type ReactNode } from 'react';
import { IActivity } from '../components/activities/IActivity';
import { IActivitiesResponseType } from '../components/utils/IActivitiesResponseType';
import ActivityCard from '../components/activities/ActivityCard';

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
      console.log("result", result)

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
      <h1 className='my-12 font-bold text-3xl text-center'>Program</h1>
      <p className='text-center'>Here you can explore all the activities on the festival grounds.</p>
      <div className='flex flex-wrap justify-center gap-8 my-12'>
        {activities.map((activity) => 
        <ActivityCard activityData={activity}/>)}
      
      
      </div>
      </>
      )
  }
  
  if(isLoading){
    // content = <Progress text="Hämtar bilar, vänta lite..."/>
    content = <h2>Loading...</h2>;
  }

  if(error){
    // content = <Alert mode="error">{error}</Alert>
    content = <h2>{error}</h2>;
  }


  return (
    <main className='w-full bg-gradient-to-b from-black via-green-900 to-green-800'>
    {content}
    </main>
  )
}

export default Activities;

// const VehiclesPage = () => {
// const [vehicles, setVechicles] = useState<IVehicle[]>([]);
// const [isLoading, setIsLoading] = useState(false);
// const [error, setError] = useState<string>();

// useEffect(() => {
// //Anropa backend asynkront
//   const getAllVehicles = async()=>{
//     try {
//       setIsLoading(true);
//       const result = await get<IVehiclesResponseType>('http://localhost:3000/api');
//       setVechicles(result.data);
      
//     } catch (error) {
//       if(error instanceof Error){
//         setError(error.message);
//       }
//     }
//     setIsLoading(false);
//   };
//   getAllVehicles();
// }, []);

//   let content: ReactNode;

//   if(vehicles){
//     content = (
//       <>
//       <Alert mode="info">
//         <p>{vehicles.length} nya bilar till försäljning</p>
//       </Alert>
//     <section className="vehicle-gallery">
//       {vehicles.map((vehicle) => (
//         <div key={vehicle.id}>
//         <Vehicle
//         image={vehicle.imageUrl}
//         vehicleId={vehicle.id}
//         manufacturer={vehicle.manufacturer}
//         model={vehicle.model}
//         />
//       </div>))}
//       </section>
//     </>)
//   }

//   if(isLoading){
//     content = <Progress text="Hämtar bilar, vänta lite..."/>
//   }

//   if(error){
//     content = <Alert mode="error">{error}</Alert>
//   }

//   return (
//     <article className='container'>
//       <Header>
//       <h2>Aktuella bilar</h2>
//       <p>Våra senaste inkomna bilar</p>
//       </Header>
//       {content}      
//     </article>
//   );
// };

// export default VehiclesPage;
