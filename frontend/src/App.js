import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import DestinationDetailPage from "./pages/DestinationDetailsPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/destination_details/:id" element={<DestinationDetailPage />} />
       </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
            
          
       
