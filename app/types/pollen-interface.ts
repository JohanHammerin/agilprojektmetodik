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
        ingen:string; 
        låg:string; 
        mellan:string; 
        hög:string;
    };

}