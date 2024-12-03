import styles from "./page.module.css";
import NavbarTYP from "./Navbar/NavbarTYP";
import Hero from "./Hero/Hero";
import Title from "../app/Title/Title";

import Programs from "./Programs/Programs";
import Campus from "./Campus/Campus";
import Homehistory from "./Homehistory/Homehistory";
import Homepotatotype from "./Homepotatotype/Homepotatotype";
import Homenutrition from "./Homenutrition/Homenutrition";
import Homerecipes from "./Homerecipes/Homerecipes";
import LogoSlider from "./LogoSlider/LogoSlider";
import HomeBuySell from "./HomeBuySell/HomeBuySell";
import HomeEvents from "./HomeEvents/HomeEvents";
import Footer from "./Footer/Footer";
import HomeWorld from "./HomeWorld/HomeWorld";
import HomeAbout from "./HomeAbout/page";

export default function Home() {
  return (
    <div>
      <NavbarTYP />
      <Hero />

      <div className={styles.container}>
        <div style={{ margin: '-35px 0' }}></div>

        <Title subTitle='What We Offer' title='Agribusiness-Bridging the Gap in the Potato Supply Chain' />
        <Programs />
        <HomeWorld />  
        <br />
        <HomeAbout />

        <div style={{ margin: '-20px 0' }}></div>

        <Title subTitle='Gallery' title='A Visual Journey Through the World of Premium Potato Trading' />
        <div style={{ margin: '-25px 0' }}></div>
        <Campus />

        <Homehistory />
        <Homepotatotype />
        <Homenutrition />
        <br />
        <div style={{ margin: '-25px 0' }}>
          <Title subTitle='Potatoes Recipes' title='Satisfy Your Cravings with These Potato Recipes' />
          <Homerecipes />
        </div>

        <div style={{ margin: '-25px 0' }}>
          <Title subTitle='Our Clients' title='Our Esteemed Clients and the Relationships We Build' />
          <LogoSlider />
        </div>

        <br />
        <div style={{ margin: '-25px 0' }}>
          <Title subTitle='Buy and Sell' title='A Dynamic Marketplace for All Your Transactions' />
          <HomeBuySell />
        </div>
        <br />
        <br />
        <Title subTitle='Our Events' title='Connecting Communities Through Memorable Events' />
        <HomeEvents />
      </div>

      <Footer />
    </div>
  );
}
