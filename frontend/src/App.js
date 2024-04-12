import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import WinterDetailPage from "./pages/DetailsPage";

function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
   <Route exact path="/" element={<Homepage/>}/>
   <Route path="/detail_destination/:id" element={<WinterDetailPage/>}/>
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
