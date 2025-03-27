import { CityID } from "~/types/city-id";

// Funktion för att toggla en stad från meny

// selected - Nuvarande valda städer
// cityName - Namnet på staden som ska toggla

export function cityToggle(selected: string[], cityName: string): string[] {
  return selected.includes(cityName)
    ? selected.filter((city) => city !== cityName)
    : [...selected, cityName];
}
