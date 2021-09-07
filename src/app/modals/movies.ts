export interface Movies {
    adult?:boolean;
    backdrop_path:"string";
    genre_ids?: [];
    id?: number;
    original_language?:"string";
    original_title?:"string";
    overview?:"string";
    popularity?:number;
    release_date?:"string";
    title:"string";
    video?:boolean;
    vote_average?:number;
    vote_count?:number;
}
export interface Results {
    results:[];
}
