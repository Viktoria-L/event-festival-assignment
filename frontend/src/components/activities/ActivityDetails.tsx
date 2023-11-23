import { IActivity, Items } from "./IActivity";
import { FC } from "react";

type ActivityDetailProps = {
    activity: IActivity;
};
interface ItemComponentProps {
  item: Items;
}

const ActivityDetails: FC<ActivityDetailProps> = ({activity}:ActivityDetailProps) => {
  const renderItem = (item: Items) => {
    switch(item.type) {
      case 'artist':
      case 'art':
      case 'yoga':
      case 'food':
      case 'chill':
      case 'market':
        return <ItemComponent key={item.id} item={item} />;
      default:
        return null;
    }
  };

  return (
    <article className="w-full mt-8 flex flex-col justify-center items-center">
        <div className="max-w-xl flex flex-col justify-center items-center">
          <img src={activity.image} alt={activity.description} className="" />
           <div className='mt-8 mb-4 text-3xl font-bold'>
            {activity.activity}
           </div>
          <div className="text-center mb-12">
            <p>{activity.description}</p>
           </div>
        </div>
            <h3 className="text-3xl">{activity.activity === 'Music' ? 'Line up' : 'Info'}</h3>
           <div className="max-w-5xl flex flex-wrap gap-8 mt-8 justify-center mb-12">
            {activity.items.map((item) => renderItem(item))}
            
           </div>
    </article>
  )
}


const ItemComponent = ({item}:ItemComponentProps) => {

  let additionalInfo;
  switch (item.type) {
    case 'artist':
      additionalInfo = <><p className="italic">Genre: {item.genre}</p><p>Date: {item.performanceDate}</p></>;
      break;
    case 'art':
      additionalInfo = <><p className="italic">Style: {item.style}</p></>;
      break;
    case 'yoga':
      additionalInfo = <><p className="italic">Style: {item.style}</p>{item.classDate && <p>Date: {item.classDate}</p>}</>;
      break;
    case 'food':
      additionalInfo = <p className="italic">Cuisine: {item.cuisine}</p>;
      break;
    case 'chill':
    case 'market':
      additionalInfo = <p className="italic">{item.description}</p>;
      break;
    default:
      additionalInfo = null;
  }
  return (
    <div className="flex flex-col gap-1 mt-2 border-2 border-green-700 shadow-lg rounded-md p-4">
    <img src={item.image} alt={item.name} className="w-56 h-56 flex self-center" />
    <h4 className="font-bold">{item.name}</h4>
    {additionalInfo}
  </div>
  );
};

export default ActivityDetails