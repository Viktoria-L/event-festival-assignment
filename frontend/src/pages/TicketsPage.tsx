
// const TicketsPage = () => {

// const handleSave = async (data: unknown) => {
//     const dataToSave = data as IVehicle;

//     try {
//       const result = await post<IVehicle, IVehiclesResponseType>(
//         'http://localhost:8080/api/v1/',
//         dataToSave
//       );

//       if (result.statusCode === 201) {
//         getVehicles();
//       } else {
//         throw new Error('Det gick inte att spara bilen!');
//       }
//     } catch (error) {
//       if (error instanceof Error) {
//         setError(error.message);
//       }
//     }

//     vehicleForm.current?.clear();
//   };


//   return (
//     <div>TicketsPage</div>
//   )
// }

// export default TicketsPage