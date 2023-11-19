import { IActivity } from "./IActivity";
import { FC } from "react";

type ActivityDetailProps = {
    activity: IActivity;
};

// //Två sätt
// //const activityDetails = ({activity}: activityDetailProps) => {
const ActivityDetails: FC<ActivityDetailProps> = ({activity}) => {
  

    //Gör kanske en if-sats här som tar in ett mode beroende på vilken activitet
    //det handlar om så ska content se ut si eller så

  return (
    <article className="container">
        <div className="activity-info">
          <img src={activity.image} alt={activity.description} className="max-w-lg" />
           <div className="title">
            {activity.activity}
           </div>
           {/* <div>
            <span>Performance {activity.}</span>
            <span>Antal km {activity.mileage}</span>
            <span>Pris {activity.value}</span>
           </div> */}
           <div className="description">
            <p>Beskrivning</p>
            <p>{activity.description}</p>
           </div>
           <div className="items">
            <p>Gå igenom alla Items här nedanför, olika beroende på type</p>
            <p>{activity.items[0].name}</p>
           </div>
        </div>

    </article>
  )
}

export default ActivityDetails