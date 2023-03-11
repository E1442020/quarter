import AboutUs from "./app/component/AboutUs/AboutUs";
import { AffixComponent } from "./app/component/Affix/Affix";
import Aminities from "./app/component/Aminities/Aminities";
import ApartmentSketch from "./app/component/ApartmentSketch/ApartmentSketch";
import FeaturedListings from "./app/component/FeaturedListings/FeaturedListings";
import FixedBackground from "./app/component/FixedBackground/FixedBackground";
import Footer from "./app/component/Footer/Footer";
import Header from "./app/component/Header/Header";
import Navbar from "./app/component/Navbar/Navbar";
import OurServices from "./app/component/OurServices/OurServices";
import SellsProperties from "./app/component/SellsProperties/SellsProperties";
import TotalProduct from "./app/component/TotalProduct/TotalProduct";

export default function App() {
  return (
    <div>
      <Navbar />
      <Header />
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
      
      
    </div>
  )
}
