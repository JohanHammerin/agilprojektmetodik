export interface PollenData {
    pollenId: string; 
    level: number; 
    time: string; 
}

export interface PollenCityAndRegion{
    regionId: string;
    cityName: string;
} 

export interface PollenTypeAndImage {
    img: string; 
    id: string; 
    type: string;
}