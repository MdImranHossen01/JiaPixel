import Hero from "./components/Home/Hero/Hero";
import HowWeWork from "./components/Home/HowWeWork/HowWeWork";
import IndustriesServed from "./components/Home/IndustriesWeServed/IndustriesWeServed";
import ServicesOverview from "./components/Home/ServicesOverview/ServicesOverview";
import Stats from "./components/Stats/Stats";


export default function Home() {
  return (
    <main>
     <Hero></Hero>
     <ServicesOverview></ServicesOverview>
     <HowWeWork></HowWeWork>
     <IndustriesServed></IndustriesServed>
     <Stats></Stats>
      
    </main>
  );
}
