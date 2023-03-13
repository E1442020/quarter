import { Route, Routes } from "react-router-dom";
import InfoPage from "./app/Pages/InfoPage/Component/InfoPage";
import MainPage from "./app/Pages/MainPage/Component/MainPage";

export default function App() {
  return (
  <>
  <Routes>
        <Route path="/" element={ <MainPage/>} />
        <Route path="/info" element={ <InfoPage/>}/>
        </Routes>
   
    
    </>
  )
}
