import { IActivity } from "./IActivity";
import { FC } from "react";

type ActivityDetailProps = {
    activity: IActivity;
};

// //Två sätt
// //const activityDetails = ({activity}: activityDetailProps) => {
const ActivityDetails: FC<ActivityDetailProps> = ({activity}) => {
    const url = '../src/assets/images/';

    //Gör kanske en if-sats här som tar in ett mode beroende på vilken activitet
    //det handlar om så ska content se ut si eller så

  return (
    <article className="container">
        <div className="activity-info">
            <img src={url + activity.image} alt="" />
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
            <p>Gå igenom alla ITems här</p>
            <p>{activity.items[0].type}</p>
           </div>
        </div>

    </article>
  )
}

export default ActivityDetails