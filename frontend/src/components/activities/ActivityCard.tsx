import { FC } from "react";
import { Link } from "react-router-dom";
import { IActivity } from "./IActivity";

type ActivityProps = {
    activityData: IActivity;
};

const ActivityCard: FC<ActivityProps> = ({activityData}: ActivityProps)=> {
  
  const {id, activity, image, description} = activityData;

  return (
    <div key={id} className="max-w-sm min-w-[350px] rounded overflow-hidden shadow-lg bg-white m-4">
    <Link to={`/program/${id}`}>
      <img className="w-full hover:scale-105 transform transition duration-700" src={image} alt={activity} />
      <div className="px-6 py-4">
      <div className="font-bold text-black text-xl mb-2">{activity}</div>
      <p className="text-gray-700 text-base">
        {description}
      </p>
    </div>
    </Link>
  </div>
  )
};

export default ActivityCard;