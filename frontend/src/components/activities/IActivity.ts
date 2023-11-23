// Definierar ett interface för en aktivitet
export interface IActivity {
    id: number;
    activity: string;
    image: string;
    description: string;
    items: Items[];
}

// Definierar ett interface för den övergripande strukturen som innehåller en array av aktiviteter
export interface IActivitiesData {
    activities: IActivity[];
}


// Basinterface för alla items-typer
export interface ItemsBase {
    id: number;
    type: string;
    name: string;
    image: string;
  }
  
 export interface Artists extends ItemsBase {
    type: 'artist';
    genre: string;
    performanceDate: string;
}
  
  export interface ArtExhibitor extends ItemsBase {
    type: 'art';
    style: string;
}
export interface Food extends ItemsBase {
    type: 'food';
    cuisine: string;
}

export interface Yoga extends ItemsBase {
    type: 'yoga';
    style: string;
    classDate: string;
}

export interface Chill extends ItemsBase {
    type: 'chill';
    description: string;
}

export interface Market extends ItemsBase {
    type: 'market';
    description: string;
}
  

export type Items = Artists | ArtExhibitor | Food | Yoga | Chill | Market; 
  

  
