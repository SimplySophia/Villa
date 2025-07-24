"use client"
import dynamic from "next/dynamic";
import { Hero } from "../components/Home/Hero/hero";
import { Featured } from "../components/Home/featured/Featured";
import { ViewProperties } from "../components/Home/viewproperties/ViewProperties";
import { BestDeals } from "../components/Home/deals/BestDeals";
import { Properties } from "../components/Home/properties/Properties";

const MapClientWrapper = dynamic(() => import("../components/map/MapClientWrapper"), {
  ssr: false,
});
const Home = () => {
    return ( 
        <section className="">
            <Hero/>
            <Featured />
            <ViewProperties />
            <BestDeals />
            <Properties />
            <MapClientWrapper />
        </section>
     );
}
 
export default Home;