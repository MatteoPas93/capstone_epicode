import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import DestinationDetailPage from "./pages/DestinationDetailsPage";
import SummerDestPage from "./pages/SummerPage";
import WinterDestPage from "./pages/WinterPage";
import AllSeasonsDestPage from './pages/AllSeasonsPage'
import RegistrationPage from "./pages/Registration.Page";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/destination_details/:id" element={<DestinationDetailPage />} />
          <Route path="/summer_destinations" element={<SummerDestPage />}/>
          <Route path="/winter_destinations" element={<WinterDestPage />}/>
          <Route path="/all_seasons_destinations" element={<AllSeasonsDestPage />}/>
          <Route path="/registration" element={<RegistrationPage />}/>
       </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
            
          
       
