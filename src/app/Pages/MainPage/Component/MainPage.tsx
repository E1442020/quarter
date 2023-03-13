import AboutUs from "./AboutUs/AboutUs";
import { AffixComponent } from "./Affix/Affix";
import Aminities from "./Aminities/Aminities";
import ApartmentSketch from "./ApartmentSketch/ApartmentSketch";
import FeaturedListings from "./FeaturedListings/FeaturedListings";
import FixedBackground from "./FixedBackground/FixedBackground";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Navbar from "./Navbar/Navbar";
import OurServices from "./OurServices/OurServices";
import SellsProperties from "./SellsProperties/SellsProperties";
import TotalProduct from "./TotalProduct/TotalProduct";

export default function MainPage() {
  return (
<>

      <Navbar />
      <Header/>
      <AboutUs />
      <TotalProduct/>
      <SellsProperties/>
      <OurServices/>
      <FeaturedListings/>
      <ApartmentSketch/>
      <FixedBackground/>
      <Aminities/>
      <AffixComponent/>
      <Footer />


</>  )
}
