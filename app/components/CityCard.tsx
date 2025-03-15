import type { CityCard } from "~/types/city";
import styles from "./CityCard.module.css";
export function CityCard(props: CityCard) {
  return (
    <main className={styles.mainContainer}>
      <h1>{props.name}</h1>
      <p>{props.latitude}</p>
      <p>{props.longitude}</p>
    </main>
  );
}
