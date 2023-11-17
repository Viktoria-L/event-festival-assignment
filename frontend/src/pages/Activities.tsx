// import Header from "../components/ui/Header";
// import { useState, useEffect, type ReactNode } from 'react';
// import { IVehicle } from "../components/vehicle/IVehicle";
// import { get } from "../components/utils/httpClient";
// import Progress from "../components/ui/Progress";
// //import ErrorMessage from "../components/ui/ErrorMessage";
// import Vehicle from "../components/vehicle/Vehicle";
// import { IVehiclesResponseType } from "../components/utils/IVehiclesResponseType";
// import Alert from "../components/ui/alert";

// // type VehicleResponseType = {
// //   status: string;
// //   statusCode: number;
// //   items: number;
// //   data: IVehicle[];
// // }


const Activities = () => {
  return (
    <div>Activities</div>
  )
}

export default Activities

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
