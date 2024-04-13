import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
// import WinterDetailPage from "./pages/WinterDetailsPage";
// import SummerDetailPage from "./pages/SummerDetailsPage";
// import AllSeasonsDetailPage from "./pages/AllSeasonsDetailsPage";
import DestinationDetailPage from "./pages/DestinationDetailsPage";

function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
   <Route exact path="/" element={<Homepage/>}/>
   <Route path="/destination_details/:id" element={<DestinationDetailPage/>}/>
   {/* <Route path="/winter_details/:id" element={<WinterDetailPage/>}/>
   <Route path="/summer_details/:id" element={<SummerDetailPage/>}/>
   <Route path="/allSeasons_details/:id" element={<AllSeasonsDetailPage/>}/> */}
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
