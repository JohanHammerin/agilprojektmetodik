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
    
    name: string; 
    images: {
        none:string; 
        low:string; 
        medium:string; 
        high:string;
        unknown:string;

    };

}