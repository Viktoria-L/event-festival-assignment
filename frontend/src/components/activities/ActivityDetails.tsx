import { IActivity } from "./IActivity";
import { FC } from "react";

type ActivityDetailProps = {
    activity: IActivity;
};

const ActivityDetails: FC<ActivityDetailProps> = ({activity}) => {
  

    //Gör kanske en if-sats här som tar in ett mode beroende på vilken activitet
    //det handlar om så ska content se ut si eller så

  return (
    <article className="w-full mt-8 flex flex-col justify-center items-center">
        <div className="max-w-xl flex flex-col justify-center items-center">
          <img src={activity.image} alt={activity.description} className="max-w-xl" />
           <div className='mt-8 text-3xl font-bold'>
            {activity.activity}
           </div>
          <div className="description">
            <p>{activity.description}</p>
           </div>
        </div>
           <div className="max-w-3xl">
            <p>Gå igenom alla Items här nedanför, olika beroende på type</p>
            <p>{activity.items[0].name}</p>
           </div>
    </article>
  )
}

export default ActivityDetails