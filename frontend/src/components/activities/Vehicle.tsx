// import { FC } from "react";
// import Card from "../ui/Card";
// import { Link } from "react-router-dom";


//Alternativ 1...
// const Vehicle = (props: {
//     image:string; 
//     vehicleId: number; 
//     manufacturer: string;
//     model: string;
//  }) => {


//     const url = '../src/assets/images/';

//   return (
//     <section>
//         <div>
//             <img src={url + props.image} alt={props.model} />
//             <p>{props.manufacturer} {props.model}</p>

//         </div>
//     </section>
//   )
// };


//ALTERNATIV 2.....
// const Vehicle = ({image, vehicleId, manufacturer, model}: {
//     image:string; 
//     vehicleId: number; 
//     manufacturer: string;
//     model: string;
//  }) => {

//     const url = '../src/assets/images/';

//   return (
//     <section>
//         <div>
//             <img src={url + image} alt={model} />
//             <p>{manufacturer} {model}</p>

//         </div>
//     </section>
//   )
// };


//ALTERNATIV 3...

// type VehicleProps = {
//     image:string; 
//     vehicleId: number; 
//     manufacturer: string;
//     model: string;
// };

// const Vehicle = ({image, vehicleId, manufacturer, model}: VehicleProps)
//  => {
//     const url = '../src/assets/images/';

//   return (
//     <section>
//         <div>
//             <img src={url + image} alt={model} />
//             <p>{manufacturer} {model}</p>

//         </div>
//     </section>
//   )
// };

//ALTERNATIV 4...
// type VehicleProps = {
//     image:string; 
//     vehicleId: number; 
//     manufacturer: string;
//     model: string;
// };

// const Vehicle: FC<VehicleProps> = ({image, vehicleId, manufacturer, model}) => {
//     const url = '../src/assets/images/';

//   return (
//     <section>
//         <div>
//             <img src={url + image} alt={model} />
//             <p>{manufacturer} {model}</p>

//         </div>
//     </section>
//   )
// };


//Alternativ 5...
// type VehicleProps = {
//     image:string; 
//     vehicleId: number; 
//     manufacturer: string;
//     model: string;
// };

// const Vehicle: FC<VehicleProps> = ({image, vehicleId, manufacturer, model}: VehicleProps)=> {
//     const url = '../src/assets/images/';

//   return (
//     <Card image={{src:url + image, alt: vehicleId.toString()}}>
//         <p>{manufacturer} - {model}</p>
//         <Link to={`/vehicles/${vehicleId}`} className="btn">Visa mer</Link>
//     </Card>
//   )
// };

// export default Vehicle