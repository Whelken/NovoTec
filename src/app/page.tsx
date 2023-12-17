import Link from "next/link";
import Inicio from "../../components/inicio/Inicio";
import { Category } from "../../components/category/Category";
import { BestPrice } from "../../components/bestPrice/BestPrice";
import { MoreSold } from "../../components/moreSold/MoreSold";
import { Offer } from "../../components/Offer/Offer";
import { Drones } from "../../components/Drones/Drones";

// import styles from './page.module.css'

export default function Home() {

  return (
    <main>
      <Inicio />
      <MoreSold/>
      <Category/>
      <BestPrice/>
      <Offer/>
      <Drones/>
    </main>
  );
}
