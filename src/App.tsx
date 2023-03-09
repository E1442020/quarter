import AboutUs from "./app/component/AboutUs/AboutUs";
import Header from "./app/component/Header/Header";
import Navbar from "./app/component/Navbar/Navbar";
import TotalProduct from "./app/component/TotalProduct/TotalProduct";


export default function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <AboutUs />
      <TotalProduct/>
    </div>
  )
}
