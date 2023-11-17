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

// Definierar ett interface för de items som hör till en aktivitet
// export interface ActivityItems {
//     artists: Artist[];
// }

// Basinterface för alla items-typer
export interface ItemsBase {
    id: number;
    type: string;
    name: string;
    image: string;
  }
  
  // Specifikt interface för artist-typen
 export interface Artists extends ItemsBase {
    type: 'artist';
    genre: string;
    performanceDate: string;
}
  
  // Specifikt interface för konstnärs-typen
  export interface ArtExhibitor extends ItemsBase {
    type: 'art';
    style: string;
}
//Food
export interface Food extends ItemsBase {
    type: 'food';
    cuisine: string;
}

//yoga
export interface Yoga extends ItemsBase {
    type: 'yoga';
    style: string;
    classDate: string;
}

//yoga
export interface Chill extends ItemsBase {
    type: 'chill';
    description: string;
    image: string;
}
  
  // Unionstyp som representerar alla möjliga items-typer
  export type Items = Artists | ArtExhibitor | Food | Yoga | Chill; // Lägg till andra feature-typer med | operatorn
  

  
